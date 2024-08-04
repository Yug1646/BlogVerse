# Blogging Website

Welcome to the BlogVerse ! This website allows users to create, view, and manage blogs with ease.

## Features

### Home Page
- The landing page of the website.

### View Page
- Everyone can view blogs published by various users.

### Login
- Users can log in to access additional features.

### Signup
- Users can create an account to start blogging.

### MyBlog (Logged-in Users Only)
- Users can view, update, and delete their own blogs.

### Blog (Logged-in Users Only)
- Users can create and publish new blogs.

## Technologies Used

- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/Yug1646/blogging-website.git
    ```

2. Navigate to the project directory:
    ```bash
    cd blogging-website
    ```

3. Install frontend dependencies:
    ```bash
    cd client
    npm install
    ```

4. Install backend dependencies:
    ```bash
    cd ../server
    npm install
    ```

5. Set up your MongoDB database and configure the connection string in the backend.

6. Start the frontend server:
    ```bash
    cd ../client
    npm start
    ```

7. Start the backend server:
    ```bash
    cd ../server
    npm start
    ```

8. Open your browser and navigate to `http://localhost:5000`.

## Usage

1. Signup: Create a new account by providing your name, email, and password.
2. Login: Log in with your registered email and password.
3. View Blogs: Browse through blogs published by various users on the View Page.
4. Create Blog: Navigate to the Blog page and fill in the details to publish a new blog.
5. Manage Blogs: Visit the MyBlog page to view, update, or delete your blogs.
