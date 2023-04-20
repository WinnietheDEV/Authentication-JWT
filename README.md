# Full stack authentication (login/register) 

the app is hosted on: https://authentication-frontend.onrender.com/

## About project

This authentication page allows user to register and login. The data submitted by user are persist in database. 
Once user register or login, server will send back JSON Web Token stored in Local Storage.


## Technologies

- Javascript (front-end function)
- Express (back-end function)
- CSS
- HTML
- MongoDB Atlas

## How to 

1. download both Client and Server directories
2. In case you don't have Atlas mongoDB. Please sign up and create one. (You have to use it in step 3)
3. You have to create .env file in Server directory of the project. In that file create variable name 'MONGO_URI' assign your own connecting path to your Atlas mongoDB
4. open terminal and run 'npm install'
5. run 'npm start'. If it works, you should see 'server is listening on port 3000' (The port I set is 3000) printed to the console.
6. open new terminal, navigate to Client directory and run 'npm install'
7. run 'npm run dev' to open front end app
9. enter front end's url in your browser and enjoy the app!

## Contributor

- Nawin Sundaraketu (github/WinnietheDEV)

