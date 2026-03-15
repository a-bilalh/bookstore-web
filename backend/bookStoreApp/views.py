from rest_framework import  viewsets
from .models import Book, UserProfile, Address, Order, OrderItem
from .serializers import BookSerializer, AddressSerializer
from .services.getData import get_random_books
from rest_framework.response import Response    
from rest_framework.decorators import api_view
from django.shortcuts import render
from django.contrib.auth.models import User
from .models import UserProfile, Address
import logging
from django.contrib.auth import authenticate, login
from oauth2_provider.views.generic import ProtectedResourceView
from django.http import HttpResponse
from .services.oauth_service import backend_login
from .services.oauth_service import backend_logout
from .services.user_exists import user_exists
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes
import stripe
from django.conf import settings
import json
from django.utils import timezone
from utils.calculate_total_price import calculate_total_price
from django.views.decorators.csrf import csrf_exempt
from .models import Payment



logger = logging.getLogger("bookStoreApp")


stripe.api_key = settings.STRIPE_SECRET_KEY





# Create your views here.

def home_view(request):
    return render(request, 'home.html')
    
    
## View to get random books ny given count and category
@api_view(['GET'])
def random_books_view(request, category, count):
    books = get_random_books(count, category)
    
    serializer = BookSerializer(books, many=True, context={'request': request})
    return Response(serializer.data)



# Get book by ID
@api_view(['GET'])
def get_book_by_id(request, book_id):
    try:
        book = Book.objects.get(id=book_id)
    except Book.DoesNotExist:
        return Response({'error': 'Book not found'}, status=404)

    serializer = BookSerializer(book, context={'request': request})

    logger.debug(f"Selected Book data: {serializer.data}")
    return Response(serializer.data)



# View to handle user registration
# can be refactored to seperate logic from here later
@api_view(['POST'])
def process_registration(request):

    if request.method == 'POST':

        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')
        logger.debug(f"Received registration data: email={email} password={password}")

        if password != confirm_password:
            return Response({'error': 'Passwords do not match'}, status=400)

        user = User.objects.create_user(username=email, email=email)
        user.set_password(password)
        user.save()
        user_profile = UserProfile.objects.create(user=user)
        user_profile.save()

        if request.POST.get("auto_login"):
            
            # authenticate the user
            tokens = backend_login(email, password)
            return Response(tokens, status=201)

        return Response({'message': 'User registered successfully'}, status=201)



# View to handle user login
@api_view(['POST'])
def login_view(request):

    email = request.POST.get('email')
    password = request.POST.get('password')

    tokens  = backend_login(email, password)

    logger.debug(f"Received tokens: {tokens} in login_view")
    return Response(tokens, status=200)


@api_view(['POST'])
def logout_view(request):

    token = request.POST.get('token')

    response = backend_logout(token)

    logger.debug(f"Logout response: {response.status_code} - {response.text} in logout_view")

    return Response({'message': 'User logged out successfully'}, status=200)




## If user with given email exist return positive 200 else negative 404
@api_view(['POST'])
def check_user_exists(request):

    if ( user_exists( request.POST.get('email') ) ):
        print('status=200')
        return Response(status=200)
    else:
        return Response(status=404)



# View to get and add new address for user
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def fetch_and_add_address(request):

    # if request is GET fetch user addresses and return
    if request.method == 'GET':

        user = request.user

        logger.debug(f"is user authenticated? {user.is_authenticated} in fetch_and_add_address view")
        print("AUTH HEADER:", request.headers.get("Authorization"))
        logger.debug(f"print user: {user}")

        addresses = Address.objects.filter(user=user).order_by('last_used')

        serializer = AddressSerializer(addresses, many=True)

        return Response(serializer.data, status=200)


    # if request is POST add new address for user
    if request.method == 'POST':

        user = request.user

        logger.debug(f"is user authenticated? {user.is_authenticated} in fetch_and_add_address view")

        street = request.POST.get('street_address')
        city = request.POST.get('city')
        state = request.POST.get('state')
        zip_code = request.POST.get('zip_code')
        country = request.POST.get('country')

        address = Address.objects.create(
            user=user,
            street=street,
            city=city,
            state=state,
            zip_code=zip_code,
            country=country
        )

        address.save()

        return Response({'message': 'Address added successfully'}, status=200)





# View to update existing address for user

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_address(request, id):

    user = request.user
    street = request.POST.get('street')
    city = request.POST.get('city')
    state = request.POST.get('state')
    zip_code = request.POST.get('zip_code')
    country = request.POST.get('country')

    try:
        address = Address.objects.get(id=id)
    except Address.DoesNotExist:
        return Response({'error': 'Address not found'}, status=404)

    address.street = street
    address.city = city
    address.state = state
    address.zip_code = zip_code
    address.country = country
    address.save()

    return Response({'message': 'Address updated successfully'}, status=200)





@permission_classes([IsAuthenticated])
@api_view(['POST'])
def create_order_payment_view(request):

    user = request.user
    cart_items = request.data.get('cartItems')
    address = Address.objects.get(id=request.data.get('address'))

    logger.debug(f"User: {user} in create_order_payment_view")
    logger.debug(f"Received cart items: {cart_items} and address: {address} in create_order_payment_view")

    order = Order.objects.create(

        user=user,
        shipping_full_name = address.full_name,
        shipping_phone_number = address.phone,
        shipping_address_line1 = address.street,
        shipping_city = address.city,
        shipping_state=address.state,
        shipping_zip_code=address.zip_code,
        shipping_country=address.country,

        order_date = timezone.now(),
        shipped = False,
        total_price = calculate_total_price(cart_items)
    )


    order.save()


    for item in cart_items:

        order_item = OrderItem.objects.create(
            order=order,
            book_id=item.get('book_id'),
            quantity=item.get('quantity'),
            price=item.get('price')
        )

        order_item.save()

    stripe_data = create_checkout_session(cart_items, address, request)

    return Response(stripe_data, status=200)



# stripe success view
@api_view(['GET'])
def success(request):
    return Response({'message': 'Payment successful'}, status=200)


# stripe cancel view
@api_view(['GET'])
def cancel(request):
    return Response({'message': 'Payment cancelled'}, status=200)




def create_checkout_session(cartItems, address, request):

    books_ids = [item.get('book_id') for item in cartItems]
    books = Book.objects.filter(id__in=books_ids)

    books_dict = {book.id: book for book in books}

    line_items = []
    for item in cartItems:
        line_items.append({
            'price_data': {
                'currency': 'usd',
                'product_data': {
                    'name': books_dict[item.get('book_id')].title,
                },
                'unit_amount': int(float(item.get('price')) * 100),  # price in cents
            },
            'quantity': int(item.get('quantity')),
        })


    checkout_session = stripe.checkout.Session.create(
        payment_method_types=['card'],
        line_items=line_items,
        mode='payment',
        metadata={
            'order_id': address.id
        },
        success_url=request.build_absolute_uri('/success/'),
        cancel_url="http://localhost:3000/checkout",
    )


    return {
        'id': checkout_session.id,
        'url': checkout_session.url
    }
    
    

@csrf_exempt
def stripe_webhook(request):

    payload = request.body
    sig_header = request.META.get("HTTP_STRIPE_SIGNATURE")
    event = None

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, settings.STRIPE_WEBHOOK_SECRET
        )

        logger.debug(f"Received Stripe webhook event: {event['type']} with data: {event['data']} in stripe_webhook view")
    except ValueError as e:
        # Invalid payload
        return HttpResponse(status=400)
    except stripe.error.SignatureVerificationError as e:
        # Invalid signature
        return HttpResponse(status=400)
    
    logger.debug(f"Received Stripe webhook event: {event['type']} with data: {event['data']} in stripe_webhook view")
    logger.debug(f"EVENT TYPE: {event['type']}")

    # Handle the checkout.session.completed event
    if event['type'] == 'checkout.session.completed':
        logger.debug(f"Received Stripe webhook event: {event['type']} with data: {event['data']} in stripe_webhook view")
        session = event['data']['object']

        order_id = session['metadata']['order_id']

        order = Order.objects.get(id=order_id)
        order.status = 'paid'
        order.save()


        Payment.objects.create(
            order=order,
            stripe_payment_intent_id=session.payment_intent,
            amount=session.amount_total / 100,  # convert cents to dollars
            payment_date=timezone.now()
        )

        logger.debug(f"Payment created for order: {order}")
        # Here you can update your order status in the database
        # For example, you can mark the order as paid and update inventory

    return HttpResponse(status=200)

