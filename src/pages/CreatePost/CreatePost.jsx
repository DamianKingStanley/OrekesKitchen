import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreatePost.css";
import Navbar from "../../component/Navbar/Navbar";
import Navibar from "../../component/Navibar/Navibar";
import FileBase from "react-filebase64";

const CreatePost = () => {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [selectedChoice, setSelectedChoice] = useState("");
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const [errorResponse, setErrorResponse] = useState(null);
  const [postDetails, setPostDetails] = useState([]);

  const getUserUsername = () => {
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    return userData ? userData.result.fullname : "";
  };

  const submitForm = async () => {
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    const userId = userData?.result?.id;

    const getUserToken = () => {
      const userData = JSON.parse(sessionStorage.getItem("userData"));
      return userData ? userData.token : "";
    };

    try {
      const response = await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getUserToken()}`,
        },
        body: JSON.stringify({
          selectedChoice,
          author: getUserUsername(),
          images,
          textAreaValue,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (Array.isArray(postDetails)) {
          postDetails.forEach((post) => {
            switch (selectedChoice.toLowerCase()) {
              case "menu":
                navigate(`/menu/${post?._id}`);
                break;
              case "feedback":
                navigate(`/feedback/${post?._id}`);
                break;
              default:
                console.error("Invalid option selected");
            }
          });
        }
        navigate("/");
      } else {
        const errorResponseData = await response.json();
        setErrorResponse(errorResponseData.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="CreatePostBody">
      <Navbar />
      <Navibar />
      <section className="Createpost">
        {errorResponse && (
          <p className="post_response"> You must login first!</p>
        )}
        <p>Choose a category</p>
        <select
          id="adminOptions"
          value={selectedChoice}
          onChange={(e) => setSelectedChoice(e.target.value)}
        >
          <option value="">Select an option</option>
          <option value="Menu">Menu</option>
          <option value="Feedback">Feedback</option>
        </select>
        <br /> <br />
        <label htmlFor="Author"> Admin: </label> <br />
        <input
          type="text"
          name="author"
          id="Admin"
          required
          value={getUserUsername()}
          readOnly
        />{" "}
        <br /> <br />
        <label htmlFor="Images">Upload Image(s):</label> <br />
        <div style={{ marginTop: "15px" }}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setImages(base64)}
          />
        </div>
        {images && (
          <div id="displayImageContainer">
            <img className="displayImage" src={images} alt="image" />
          </div>
        )}
        <br /> <br />
        <p>Description:</p>
        <textarea
          id="description"
          value={textAreaValue}
          onChange={(e) => setTextAreaValue(e.target.value)}
        />{" "}
        <br /> <br />
        <button id="createpostbtn" onClick={submitForm}>
          Create Post
        </button>
      </section>
    </div>
  );
};

export default CreatePost;
