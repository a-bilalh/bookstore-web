
ISSUE: 01/10/2026 (Solved)
Right now, states for registration and login are inside the HomePage.jsx. Homepage used to call the header component using the states. Header included functionality such as cart, login, registration. <br>

** DECICSION: Header component was included in HeaderLayout. <br>
    TODO: <br>
    1: Refactor the functionality in Header component to seperate component. <br>
    2: Place state needed by component in each component or all in a context. <br>
    <br>
    ** DECISION-1/15/2026- <br>
    ** Ended up moving states for registration and login to the Header component. <br>
    ** These functionality works fine now. <br>



** ISSUE: 02/04/2026 (Solved)
Initially, I built the logic for registration of user in home page such that frontend send user data and backend
just enters user data to the database. The issue was that when using the same endpoint in checkout page, based on 
design decision the user should be automatically logged in after successfully processing user registration information. 
Thus, initial logic was lacking the functionality to logged in the user. 

DECISION: As the result, I added a boolean value of auto-login to the backend. If it was marked true the backend logic was 
modified such that it would send user login tokens to frontend, if it was marked false, that extra step would be skipped. 





## Things to do in next iteration ## 
** ISSUE: Currently login form has same css style used in different places. 
I want to change the css style for this component and make if conditional based on where it is used. 