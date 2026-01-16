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
     

     