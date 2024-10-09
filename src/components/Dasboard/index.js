import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({ title: "", body: "" });
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch users (First API Call)
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (err) {
      setError("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  // Create a post (Second API Call)
  const createPost = async () => {
    if (!selectedUserId) {
      alert("Please select a user first.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: post.title,
        body: post.body,
        userId: selectedUserId,
      });
      setPosts([response.data, ...posts]); // Add new post to the list
    } catch (err) {
      setError("Failed to create post.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch comments (Third API Call)
  const fetchComments = async (postId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      setComments(response.data);
    } catch (err) {
      setError("Failed to fetch comments.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(); // Fetch users on component mount
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-xl">
        <h1 className="text-3xl font-semibold mb-8 text-gray-800">API Chaining Dashboard</h1>

        {/* Loading/Error States */}
        {loading && <p className="text-blue-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Users dropdown */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Select User:</label>
          <select
            className="border border-gray-300 p-3 w-full rounded-md"
            value={selectedUserId}
            onChange={(e) => setSelectedUserId(e.target.value)}
          >
            <option value="">Select a user</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        {/* Post creation form */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Create a Post</h2>
          
          {/* Title input */}
          <input
            type="text"
            placeholder="Post Title"
            className="border border-gray-300 p-3 w-full mb-6 rounded-md"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />

          {/* Body input */}
          <textarea
            placeholder="Post Body"
            className="border border-gray-300 p-3 w-full mb-4 rounded-md"
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
          />
          
          {/* Submit button */}
          <button
            className="bg-blue-600 text-white p-3 rounded-md w-full hover:bg-blue-700"
            onClick={createPost}
          >
            Create Post
          </button>
        </div>

        {/* Display Posts */}
        {posts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Posts</h2>
            {posts.map((post) => (
              <div
                key={post.id}
                className="border p-4 mb-4 rounded-md cursor-pointer"
                onClick={() => fetchComments(post.id)}
              >
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        )}

        {/* Display Comments */}
        {comments.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Comments</h2>
            {comments.map((comment) => (
              <div key={comment.id} className="border p-4 mb-4 rounded-md">
                <h3 className="text-lg font-semibold">{comment.name}</h3>
                <p>{comment.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
