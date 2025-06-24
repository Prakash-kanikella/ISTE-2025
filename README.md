# React Vite App

This is a React application built using [Vite](https://vitejs.dev/).

## Getting Started

### 1. Install Dependencies
```sh
npm install
```

### 2. Start Development Server
```sh
npm run dev
```

The app will be available at `http://localhost:5173/` by default.



## Backend Setup

### 1. Install Dependencies
```sh
npm install
```
Create a .env file in the frontend directory and add this line
VITE_API_URL=http://localhost:5001


Create a .env file in the backend directory and add these lines 
MONGO_URI=mongodb+srv://<your-username>:<your-password>@your-cluster.mongodb.net/<your-db>?retryWrites=true&w=majority
PORT=5001
ADMIN_PASSWORD=yourStrongAdminPassword
CLIENT_ORIGIN=http://localhost:5173
SERVER_URL=http://localhost:5001

Make sure your MongoDB URI is valid. You can use MongoDB Atlas for a free cloud database.

### 2. Start the backend server with nodemon
```sh
npx nodemon server.js
```
