


# This function calculates the total price of items in a shopping cart.
def calculate_total_price(cart_items):

    total_price = 0.00

    for item in cart_items:
        total_price += item['price'] * item['quantity']

    
    return total_price