import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import Navibar from "../../component/Navibar/Navibar";
import "./Dashboard.css";
import posticon from "../../assest/iconpost.png";
import IndividualPost from "../../component/IndividualPost/IndividualPost";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const getUserToken = () => {
          const userData = JSON.parse(sessionStorage.getItem("userData"));
          return userData ? userData.token : "";
        };

        const userData = JSON.parse(sessionStorage.getItem("userData"));
        if (!userData || !userData.result.id) {
          console.error("User ID is undefined");
          return;
        }

        const userId = userData.result.id;

        const response = await fetch(
          `http://localhost:5000/user/profile/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${getUserToken()}`,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setUser(data);
          // console.log(data);
        } else {
          console.log(data);
        }
      } catch (error) {
        console.log(JSON.stringify(error, null, 2));
      }
    };

    getUserProfile();
  }, []);

  return (
    <div className="DashboardBody">
      <Navbar />
      <Navibar />
      {user ? (
        <div className="UserHeader">
          {/* Display the profile picture */}
          {user.profilePicture && (
            <img
              src={`http://localhost:5000/user/${user.profilePicture}`}
              alt="Profile"
              className="profilePicture"
            />
          )}
          <h2>Welcome back, {user?.fullname}!</h2>
          <div className="updateAndPostBtn">
            <div className="updateOnly">
              <Link to={`/profile/edit/${user?.username}`}>
                <button id="profileUpdateBtn">Update Profile</button>
              </Link>
            </div>
            <div id="postContentBtn">
              <Link to="/post-content">
                <p>
                  <img id="posticon" src={posticon} alt="" />
                  Share a post
                </p>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading....</p>
      )}
      {user && <IndividualPost />}
    </div>
  );
};

export default Dashboard;
