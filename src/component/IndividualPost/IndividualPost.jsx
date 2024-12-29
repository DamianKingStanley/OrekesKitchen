import React, { useState, useEffect, useRef } from "react";
import convertDate from "../../utils/convertDate";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./IndividualPost.css";
import ConfirmationBox from "../ConfirmationBox/ConfirmationBox";
import LikesAndViews from "../../component/LikesAndViews/LikesAndViews";

const IndividualPost = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const userId = userData?.result?.id;
  const [showConfirmationBox, setShowConfirmationBox] = useState({}); // Updated to use an object
  const [postToDelete, setPostToDelete] = useState(null);
  const [copiedToClipboardMap, setCopiedToClipboardMap] = useState({});

  const [dropdownOpen, setDropdownOpen] = useState(
    Array(posts.length).fill(false)
  );
  const dropdownRefs = useRef([]);

  useEffect(() => {
    const initialConfirmationState = {};
    posts.forEach((post) => {
      initialConfirmationState[post._id] = false; // Initialize each post ID to false
    });
    setShowConfirmationBox(initialConfirmationState);
  }, [posts]);

  const getUserToken = () => {
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    return userData ? userData.token : "";
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = (index) => {
    const newDropdownOpen = Array(posts.length).fill(false);
    newDropdownOpen[index] = !dropdownOpen[index];
    setDropdownOpen(newDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(Array(posts.length).fill(false));
  };

  const handleOutsideClick = (event) => {
    if (!dropdownRefs.current.some((ref) => ref.contains(event.target))) {
      closeDropdown();
    }
  };
  // DELETE
  const handleDeletePost = async (postId, index) => {
    setPostToDelete(postId);
    setShowConfirmationBox({ ...showConfirmationBox, [postId]: true }); // Show confirmation box for the clicked post
  };

  const confirmDeletePost = async (postId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/posts/edit/${postId}`,
        {
          headers: {
            Authorization: `Bearer ${getUserToken()}`,
          },
        }
      );
      console.log("Post deleted:", response.data);
      setPosts(posts.filter((post) => post._id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
    setShowConfirmationBox({ ...showConfirmationBox, [postId]: false }); // Hide confirmation box after deletion
  };

  const cancelDeletePost = (postId) => {
    setShowConfirmationBox({ ...showConfirmationBox, [postId]: false }); // Hide confirmation box
  };

  //EDIT

  const handleEditPost = async (postId) => {
    const getUserToken = () => {
      const userData = JSON.parse(sessionStorage.getItem("userData"));
      return userData ? userData.token : "";
    };

    try {
      // Make an HTTP request to fetch the post data for editing
      const response = await axios.get(`http://localhost:5000/post/${postId}`, {
        headers: {
          Authorization: `Bearer ${getUserToken()}`,
        },
      });

      // If the request is successful, navigate to the edit page with the post data
      if (response.status === 200) {
        const postData = response.data;
        navigate(`/post/edit/${postId}`, { state: { postData } });
      } else {
        // Handle errors if needed
      }
    } catch (error) {
      // Handle errors if needed
    }

    closeDropdown();
  };

  //SHARE
  const handleSharePost = (postId) => {
    const postURL = `${window.location.origin}/contents/${postId}`;
    navigator.clipboard
      .writeText(postURL)
      .then(() => {
        console.log("URL copied to clipboard:", postURL);
        setCopiedToClipboardMap((prevState) => ({
          ...prevState,
          [postId]: true, // Set state for specific postId
        }));
        closeDropdown();
        // Remove message after 3 seconds
        setTimeout(() => {
          setCopiedToClipboardMap((prevState) => ({
            ...prevState,
            [postId]: false, // Remove message after 3 seconds
          }));
        }, 3000);
      })
      .catch((error) => {
        console.error("Failed to copy URL to clipboard:", error);
        closeDropdown();
      });
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/posts/user?userId=${userId}`
        );
        const data = await response.json();
        const reversedData = data.reverse();
        setPosts(reversedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, [userId]);
  // POST COMPONENT
  const truncateText = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + " ............ CLICK TO READ!";
    }
    return text;
  };

  return (
    <div className="IndividualPostBody">
      <div className="IndividualPostWrapper">
        {posts.map((post, index) => (
          <div key={post._id}>
            {copiedToClipboardMap[post._id] && (
              <p className="clipboard-message">
                URL copied to clipboard. Share the link to your friends.
              </p>
            )}
            <div id="TitleHead">
              <div className="TitleTop">
                <h3>{post.title}</h3>
                <p>{convertDate(post?.createdAt)}</p>
                <div>
                  <LikesAndViews likes={post.likes} views={post.views} />
                </div>
              </div>
              <div>
                {showConfirmationBox[post._id] && ( // Show confirmation box only if showConfirmationBox for this post is true
                  <ConfirmationBox
                    message="Are you sure you want to delete this post?"
                    onConfirm={() => confirmDeletePost(post._id)}
                    onCancel={() => cancelDeletePost(post._id)}
                  />
                )}
              </div>
              <div
                className="dropdown"
                ref={(ref) => (dropdownRefs.current[index] = ref)}
              >
                {/* Three dots */}
                <div className="dots" onClick={() => toggleDropdown(index)}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                {dropdownOpen[index] && (
                  <div className="dropdown-menu">
                    <div
                      className="menu-item"
                      onClick={() => handleEditPost(post._id)}
                    >
                      Edit
                    </div>
                    <div
                      className="menu-item"
                      onClick={() => handleDeletePost(post._id, index)}
                    >
                      Delete
                    </div>
                    <div
                      className="menu-item"
                      onClick={() => handleSharePost(post._id)}
                    >
                      Share
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div
              id="TitleHeader"
              onClick={() => navigate(`/contents/${post?._id}`)}
            >
              <p>{truncateText(post.textAreaValue, 50)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndividualPost;
