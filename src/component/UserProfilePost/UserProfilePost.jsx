import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfilePosts = ({ userId }) => {
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/posts/user?userId=${userId}`
        );
        setUserPosts(response.data.userPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user posts:", error);
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, [userId]);

  return (
    <div>
      <h2>User Posts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : userPosts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        <ul>
          {userPosts.map((post) => (
            <li key={post._id}>
              <h3>{post.title}</h3>
              <p>{post.textValueArea}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserProfilePosts;
