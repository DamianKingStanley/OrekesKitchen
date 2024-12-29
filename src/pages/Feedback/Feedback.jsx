import React from "react";
import { useParams } from "react-router-dom";
import Navibar from "../../component/Navibar/Navibar";
import Navbar from "../../component/Navbar/Navbar";
import PostCardFeeback from "../../component/PostCardEach/PostCardFeedback";

const NonFiction = () => {
  return (
    <div>
      <Navbar />
      <Navibar />
      <section>
        <div className="content-header">
          <h1>customer's feedback</h1>
        </div>
        <div>
          <PostCardFeeback />
        </div>
      </section>
    </div>
  );
};

export default NonFiction;
