# JavaScript Server - Course assessment 1
To run this application, clone the repository and install dependencies: 
$ git clone https://github.com/Magnusborgers1/Magnus_Borgersen_JanFT23_JSS.git
$ cd Magnus_Borgersen_JanFT23_JSS
$ npm install

Now start the server:
$ npm start

Go to http://localhost:3000

Usage: 
In the home page you can navigate to different pages by using the navbar. The navbar provides three options:
1. Home - Interaction with the "Home" button in the navbar wil redirect user to the home page. 

2. Memes - This is a button that will take user to the "memes" page, where you get 100x different memes. 
   2.1 - This page have a details button that will provide the user with details about the clicked meme. However, this button is only available for users who are logged in. Guest users are not able to see or interact with this button.

3. Sign In - By clicking "Sign In" you will be redirected to the login page, where the users can sign in with username and password. 

The logo can also be clicked for redirection to the home page. 


The technologies used for this application:
Express web framework to build app.
Passport to log on.
Express session + express session JSON to store session data and list of memes. 
EJS templates to draw HTML. 
Styling with Bootstrap and custom css.


Dependencies: 
"axios": "^1.2.2",
    "bootstrap": "^5.2.3",
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "ejs": "^3.1.8",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "express-session-json": "^0.0.8",
    "http-errors": "~1.6.3",
    "jquery": "^3.7.0",
    "morgan": "~1.9.1",
    "passport": "^0.6.0",
    "passport-local": "^1.0.0",
    "request": "^2.88.2"