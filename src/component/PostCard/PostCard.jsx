import React, { useEffect, useState } from "react";
import "./PostCard.css";
import convertDate from "../../utils/convertDate";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaHeart, FaEye } from "react-icons/fa";

const PostCard = () => {
  const navigate = useNavigate();
  const [postDetails, setPostDetails] = useState([]);
  const [postLimit, setPostLimit] = useState(10); // Example value, change as needed

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/posts");
        const data = await response.json();
        const reversedData = Array.isArray(data) ? data.reverse() : [];

        setPostDetails(reversedData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const redirectToUserPosts = (userId) => {
    navigate(`/writer/${userId}/posts`);
  };

  const handlePostClick = async (postId) => {
    navigate(`/contents/${postId}`);
  };

  return (
    <section className="PostCardBody">
      <div className="postCardSection">
        {postDetails.map((post) => {
          return (
            <div className="post_wrapper" key={post._id}>
              <div>
                <div className="post_Top">
                  <div
                    className="post_user_details"
                    onClick={() => redirectToUserPosts(post?.userId)}
                    style={{ cursor: "pointer" }}
                  >
                    <h4>{post?.author}</h4>
                  </div>
                  <p id="displaydate">{convertDate(post?.createdAt)}</p>
                </div>
                <div
                  onClick={() => handlePostClick(post?._id)}
                  className="MainContent"
                >
                  {/* <h3>{post?.selectedChoice}</h3> */}
                  {post?.images && (
                    <img
                      className="food_image"
                      src={post?.images}
                      alt="food_image"
                    />
                  )}
                  <p>{post?.textAreaValue}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PostCard;
