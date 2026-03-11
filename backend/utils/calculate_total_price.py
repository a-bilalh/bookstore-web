


# This function calculates the total price of items in a shopping cart.
def calculate_total_price(cart_items):

    print(f"Calculating total price for cart items: {cart_items}")
    print(f"Type of cart_items: {type(cart_items)}")

    total_price = 0.00

    for item in cart_items:

        total_price += float(item['price']) * int(item['quantity'])

    
    return total_price