# ELOQUE – E-Commerce Website  

## Overview  
ELOQUE is a modern e-commerce platform for premium quality bags. It features secure user authentication, product browsing, shopping cart functionality, and a dynamic UI.  
Built with Node.js, Express.js, and MongoDB, this project provides a structured backend with RESTful APIs and a clean, responsive frontend using Tailwind CSS.  

## Features  
- User Authentication – Secure JWT-based login/signup system  
- Product Management – Users can browse premium bags  
- Shopping Cart Functionality – Add products to cart and manage them  
- RESTful API Architecture – Modular backend with routes and controllers  
- MongoDB Database – Stores user and product data efficiently  
- Responsive UI – Built with Tailwind CSS for a smooth user experience  

## Tech Stack  
- Backend: Node.js, Express.js, MongoDB  
- Authentication: JWT, bcrypt  
- Frontend Styling: Tailwind CSS  
- Middleware: Express middleware for request validation  
- Database ORM: Mongoose  

## Installation & Setup  

### 1. Clone the repository  
```bash
git clone https://github.com/aasthacode/ELOQUE-.git

   
2. Navigate to the project folder

cd ELOQUE-
3. Install dependencies

npm install
4. Set up environment variables

Create a .env file in the root folder
Add the following environment variables
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>
PORT=5000
5. Start the server
npm start
6. Open the project in browser
Server will run on http://localhost:5000
