## 01/10/2026
ISSUE: Right now, states for registration and login are inside the HomePage.jsx. Homepage used to call the header component using the states. Header included functionality such as cart, login, registration. <br>
<br>
DECICSION: Header component was included in HeaderLayout. <br>
    TODO: <br>
    1: I will also refactor the functionality in Header component to seperate component. <br>
    2: Place state needed by component in each component or all in a context. <br>