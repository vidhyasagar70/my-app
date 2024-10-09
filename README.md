API Chaining Dashboard

This is a simple API Chaining Dashboard built using React and Tailwind CSS. The application demonstrates API chaining by fetching a list of users, allowing the user to create a post for a selected user, and then fetching comments for that post.
Features

    API Chaining: Chain multiple API calls (fetch users, create a post, fetch comments).
    State Management: React's useState and useEffect are used to handle API data and form inputs.
    Loading and Error States: Users are notified of loading and error states during API requests.
    Responsive Design: Tailwind CSS is used to style the application and make it responsive.

APIs Used:

    GET Users: Fetch a list of users.
    POST Create Post: Create a new post using the selected user's ID.
    GET Comments: Fetch comments for the newly created post.

Prerequisites

Before you begin, ensure you have the following installed:

    Node.js (v12 or later)
    npm (Node package manager)

Setup Instructions

Follow these steps to set up the project locally:
1. Clone the repository

bash

git clone https://github.com/vidhyasagar70/api-chaining-dashboard.git
cd api-chaining-dashboard

2. Install Dependencies

Once inside the project directory, install the required dependencies:

bash

npm install

3. Install Tailwind CSS

To set up Tailwind CSS for styling:

bash

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

Then, open the tailwind.config.js file and add the following configuration:

js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

Next, in your src/index.css (or equivalent global stylesheet), add the following imports:

css

@tailwind base;
@tailwind components;
@tailwind utilities;

4. Run the Application

Once all dependencies are installed, you can start the application by running:

bash

npm start

Your React application should now be running on http://localhost:3000.
How It Works

This application demonstrates chaining between three different APIs:

    GET Users List:
        On component mount, the application makes a GET request to fetch a list of users.
        The response is stored in the users state and displayed in a dropdown for selection.

    Create a Post:
        Users can select a user from the dropdown, enter a title and body, and submit the form to create a post.
        A POST request is sent to the API, passing the selected user's ID and the entered post information.
        The new post is then displayed on the page.

    Get Comments:
        Once a post is created, users can click on the post to fetch comments for that specific post.
        A GET request is made to fetch comments, and the response is displayed below the post.

State Management

The app uses the following state variables:

    users: Holds the list of users fetched from the API.
    posts: Holds the list of created posts.
    comments: Stores the comments fetched for a specific post.
    loading: Boolean value to track the loading state of API calls.
    error: Holds any error messages encountered during API requests.

API Endpoints

    GET https://jsonplaceholder.typicode.com/users: Fetches a list of users.
    POST https://jsonplaceholder.typicode.com/posts: Creates a new post using the selected user ID.
    GET https://jsonplaceholder.typicode.com/posts/{postId}/comments: Fetches comments for a post.

Folder Structure

bash

/src
  /components
    - Dashboard.js  # Main component handling API Chaining
  index.js           # Entry point for React
  App.js             # Main App component
  index.css          # Global stylesheet (with Tailwind imports)

Usage
1. Select a User

    From the dropdown, select a user to create a post for.

2. Create a Post

    Enter the post title and body, then click "Create Post".
    The post will be created and displayed on the page.

3. Fetch Comments

    After creating a post, click on the post to fetch and display the comments related to that post.

Technologies Used

    React: Frontend JavaScript library for building user interfaces.
    Axios: Promise-based HTTP client for making API requests.
    Tailwind CSS: Utility-first CSS framework for styling the application.

Error Handling

The application includes basic error handling:

    Loading States: Displays a "Loading..." message during API requests.
    Error Messages: If an API request fails, an error message is displayed to the user.

License

This project is licensed under the MIT License - see the LICENSE file for details.
Future Enhancements

    Add pagination for the users and posts.
    Improve form validation for better user experience.
    Add a notification system for success/error messages.