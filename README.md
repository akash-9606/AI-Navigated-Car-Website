Built using:

Frontend: React.js
Backend: Node.js + Express.js
Database: MongoDB

Backend Setup

Navigate to backend
cd backend
Install dependencies
npm install
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/car_ai
Start MongoDB
Run backend server
npm start
Server will run on:
http://localhost:5000

Frontend Setup

Navigate to frontend
cd frontend
Install dependencies
npm install
Start React app
npm start
App will run on:
http://localhost:3000

In this Project

First I have implemented Navbar
Contains navigation links (Models, Compare, Pricing, Test Drive)
In Hero Section
Displays main heading "Drive the Future"
Includes buttons to explore cars and book test drive
In Models Section
Displays 10–15 car models
Shows image, type, seats, and price
Supports filtering and sorting
In Comparison Section
Displays all cars in table format
Shows Model, Type, Price, Seats
Supports dynamic updates
In Pricing Section
Displays car prices
Supports currency conversion (USD)
Updates dynamically using AI
In Booking Section
User can book test drive
Takes details:
Name
Email
Phone
Model
City
Date
Stores data in MongoDB
Shows success alert message
AI Assistant Feature
Floating chat button
Click to open/close chat
Supports text and voice input

AI Assistant Functionalities

Filter cars
Example: Show SUV cars under 20 lakhs
Compare cars
Example: Compare cars
Book test drive
Example: Book test drive for Nova X
Recommend cars
Example: Best car for family
Reset cars
Example: Show all cars
Sort cars
Low to High
High to Low
Voice Input
User can speak commands
Automatically converts speech to text
