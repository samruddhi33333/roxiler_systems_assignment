Store Rating Platform

This is a fullstack web application that allows users to rate registered stores on the platform. It supports three roles with different permissions: System Administrator, Normal User, and Store Owner.

Tech Stack

Backend
Framework: Express.js
Database: PostgreSQL (or MySQL)
Authentication: JWT-based login

Frontend
Framework: React.js (with React Router)
State Management: Context API or Redux (optional)
Styling: TailwindCSS or CSS Modules

User Roles & Functionalities

System Administrator
Can add new stores, normal users, and admin users
Dashboard displaying:
Total users
Total stores
Total submitted ratings
Manage users and view:
Name, Email, Address, Role
Rating (if Store Owner)
Filter and sort all listings by Name, Email, Address, Role
Logout functionality

Normal User
Register/Login
View all stores with:
Name, Address, Overall Rating, User’s Rating
Search stores by Name/Address
Submit and edit ratings (1 to 5)
Update their password
Logout functionality

Store Owner
Login and password update
Dashboard with:
List of users who rated their store
Average rating
Logout functionality

Form Validations

Field - Rules
Name - Min 20 characters, Max 60 characters
Address - Max 400 characters
Password - 8–16 characters, 1 uppercase letter, 1 special character
Email - Must be a valid email format

Features

Role-based authentication and authorization
Search and filter on user/store listings
All tables support sorting (ascending or descending)
Protected routes based on user role
Password update functionality

Database Schema (PostgreSQL/MySQL)

Tables:
Users: id, name, email, address, passwordHash, role
Stores: id, name, email, address, ownerId
Ratings: id, userId, storeId, rating (1-5)

Relationships:
A Store is owned by a User (role = 'store_owner')
A Rating is submitted by a User and belongs to a Store

Getting Started

Backend Setup
cd backend
npm install
npm run dev

Update .env with your PostgreSQL credentials.

Frontend Setup
cd frontend
npm install
npm start

Project Structure

backend/
controllers/
routes/
models/
middleware/
app.js

frontend/
components/
pages/
services/
App.jsx

Best Practices Followed

JWT-based secure authentication
RESTful API design
Passwords are hashed using bcrypt
Centralized error handling and form validations
Clean, modular folder structure
