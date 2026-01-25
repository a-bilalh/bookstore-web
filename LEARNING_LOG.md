BUGS<br>
<br>
** Bug - (1/15/2026): When clicking on add to cart in book details page. It doesn't add to cart and gave the following error:
        Cannot read properties of undefined (reading 'values')
        TypeError: Cannot read properties of undefined (reading 'values')
        
        Cause: Code was trying to mutate the state of state variable rather than updating it In    this   case, the code was attempting to mutate a the initilized map state variable.
                    
        Solution: created a new state map and appended it to the previous. 
                  -> 
                    

        Previous Code:

                    function addToCart(item) { 
                        setCartItems( prevItems => {
                        prevItems.set( item, (prevItems.get(item) || 0) + 1 ); 
                        }); 
                    } 
                
        New Code:
                    function addToCart(item) { 
                        setCartItems( prevItems => { 
                            const newMap = new Map(prevItems); 
                            newMap.set( item, (newMap.get(item) || 0) + 1 ); 
                        return newMap; 
                        }); 
                     }
     

=============================================================================================================================
     
** Bug - (1/22/2026): Clicking the increment + and decrement - of item in cart page doesn't behave as expected. Clicking on
                      + add unknown or empty object to the cart. An empty box is getting displayed to the screen without
                      book details. 

        Cause: wasn't passing the arguments to the function. Then was incorrecly using the arrow function. 

        Solution: passed the book argument to the function.

        Previous Code: <button onClick={(book) => increaseBook(book)}>+</button>

        New Code: <button onClick={() => increaseBook(book)}>+</button>
                      


=============================================================================================================================

**Bug - (1/22/2026): Adding the same book twice to the cart is rendered seperately in the cart page.

=============================================================================================================================

** Bug- (1/22/2026): When all items of cart page is removed, the order summary box is moved shifted from its orignal position

=============================================================================================================================