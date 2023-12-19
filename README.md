# Paw Path Home

Welcome to the Kennel 2.0 application!
This app utilizes a Rails API and a React frontend. This application allows users to keep track of animal and client information when impounding an animal into their kennel. 

## Video Demo

Check out [this video](https://youtu.be/9RHkjFBBqnI) for a brief look into the Paw Path Home application.

## Requirements
- Ruby 2.7.4
- NodeJS (v16), and npm
- Postgresql


## Installation

- Fork and Clone this project
- `cd` into the project directory
- Run `bundle`
- Run `Rails Server`
- Run `npm install && npm start -prefix client`

This will host the server locally and open a browser window to display the application. If for some reason the browser doesn't open, but the server started, you can click on the link that appears in the terminal, see below...

Local:            http://localhost:4000/
On Your Network:  http://192.168.1.5:4000/server

## Functionality

- Upon opening the app, you should be directed to a login/sign-in page. If you do not already have an account, enter your desired username and password and click the "Signup" button. If you do have an account already enter the username and password and then click the button "Login".

- Once your account is set up or you have logged in, you will be directed to a home page that welcomes you to the application. Above there will be a navigation bar with links that will take you to the listed clients, animals, and impound page. Ypu will also see a virtual kennel where you can view what animals are in your kennels.

- If you are done using the application please click on the logout button on the right of your navigation bar to logout as a user until next time you need Kennel Mate 2.0.