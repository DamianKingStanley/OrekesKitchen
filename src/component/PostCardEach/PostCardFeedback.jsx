import React, { useEffect, useState } from "react";
import capitalizeInitials from "../../utils/convertInitial";
import convertDate from "../../utils/convertDate";
import { useNavigate } from "react-router-dom";
import "./PostCardFeedBack.css";

const PostCardFeedback = () => {
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
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);

  const FeedbackPost = postDetails.filter(
    (post) => post.selectedChoice === "Feedback"
  );

  return (
    <section className="PostCardFeedbackBody">
      <div className="postCardFeedback">
        {FeedbackPost.map((post) => (
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
                    className="feedback_image"
                    src={post?.images}
                    alt="feedback_image"
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

export default PostCardFeedback;
