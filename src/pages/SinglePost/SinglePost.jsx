import React, { useEffect, useState } from "react";
import "./SinglePost.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import convertDate from "../../utils/convertDate";
import capitalizeInitials from "../../utils/convertInitial";
import Navbar from "../../component/Navbar/Navbar";
import Navibar from "../../component/Navibar/Navibar";
import LikesAndViews from "../../component/LikesAndViews/LikesAndViews";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/post/${id}`);
        setPost(response.data.SinglePost);
      } catch (error) {
        console.log(error);
      }
    };
    id && fetchPost();
  }, [id]);

  const formatContentIntoParagraphs = (content) => {
    if (!content) {
      return null;
    }

    const paragraphs = content
      .split("\n")
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);
    return paragraphs;
  };

  return (
    <div>
      <Navbar />
      <Navibar />
      <div className="single_post_container">
        <div className="single_post_details">
          <p>{convertDate(post?.createdAt)}</p>
          <div className="theUser">
            <p>
              {post?.author
                ?.split(" ")
                .map((word) => word.charAt(0).toUpperCase())
                .join("")}
            </p>
            <h6>{capitalizeInitials(post?.author)}</h6>
          </div>
        </div>
        <div className="singlePostHeader">
          <div className="singlePostContent">
            <h1>{post?.title}</h1>
            <h3>{post?.selectedChoice}</h3>
            <h5>{formatContentIntoParagraphs(post?.textAreaValue)}</h5>
            <div>
              <LikesAndViews likes={post.likes} views={post.views} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
