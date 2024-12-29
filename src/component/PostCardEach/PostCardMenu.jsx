import React, { useEffect, useState } from "react";
import capitalizeInitials from "../../utils/convertInitial";
import convertDate from "../../utils/convertDate";
import { useNavigate } from "react-router-dom";
import "./PostCardMenu.css";

const PostCardMenu = () => {
  const navigate = useNavigate();
  const [postDetails, setPostDetails] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch("http://localhost:5000/posts");
        const data = await response.json();
        const reversedData = Array.isArray(data.fetchPosts)
          ? data.fetchPosts.reverse()
          : [];
        setPostDetails(reversedData);
        // console.log(postDetails);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);

  const truncateText = (text, maxLength) => {
    const words = text.split(" ");
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(" ") + "......Read more";
    }
    return text;
  };

  const MenuPost = postDetails.filter((post) => post.selectedChoice === "Menu");

  return (
    <section className="PostCardMenuBody">
      <div className="postCardMenu">
        {MenuPost.map((post) => (
          <div className="post_wrapper" key={post._id}>
            <div
              onClick={() => navigate(`/contents/${post._id}`)}
              className="post_section_a"
            >
              <div className="post_Top">
                <div className="post_user_details">
                  <h4>{capitalizeInitials(post.author)}</h4>
                </div>
                <p>{convertDate(post.createdAt)}</p>
              </div>
              <div className="MainContent">
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
        ))}
      </div>
    </section>
  );
};

export default PostCardMenu;
