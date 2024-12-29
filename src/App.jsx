import React from "react";
import Home from "./pages/Home/Home";
import MenuFood from "./pages/MenuFood/MenuFood";
import SignIn from "./pages/SignIn/SignIn";
import LogIn from "./pages/LogIn/LogIn";
import Feedback from "./pages/Feedback/Feedback";
import About from "./pages/AboutUs/AboutUs";
import CreatePost from "./pages/CreatePost/CreatePost";
import Admin from "./pages/Admin/Admin";
import Dashboard from "./pages/Dashboard/Dashboard";
import SinglePost from "./pages/SinglePost/SinglePost";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";
import EditPost from "./pages/EditPost/EditPost";
import JollofRice from "./pages/AllFoodSinglePage/JollofRice";
import CoconutRice from "./pages/AllFoodSinglePage/CoconutRice";
import Amala from "./pages/AllFoodSinglePage/AmalaAbula";
import Vegetable from "./pages/AllFoodSinglePage/MixedVeggies";
import IyanAndEfor from "./pages/AllFoodSinglePage/IyanAndEfor";
import SoupAndStew from "./pages/AllFoodSinglePage/SoupAndStew";
import ChickenAndTurkey from "./pages/AllFoodSinglePage/ChickenAndTurkey";
import Cart from "./pages/Cart/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<SignIn />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/menu" element={<MenuFood />} />
          <Route exact path="/feedback" element={<Feedback />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/jollof-rice" element={<JollofRice />} />
          <Route exact path="/coconut-rice" element={<CoconutRice />} />
          <Route exact path="/amala" element={<Amala />} />
          <Route exact path="/mixed-veggies" element={<Vegetable />} />
          <Route exact path="/iyan" element={<IyanAndEfor />} />
          <Route exact path="/stew-soup" element={<SoupAndStew />} />
          <Route exact path="/chicken-turkey" element={<ChickenAndTurkey />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/post-content" element={<CreatePost />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/profile/:fullname" element={<Dashboard />} />
          <Route exact path="/post/edit/:id" element={<EditPost />} />

          <Route
            exact
            path="/profile/edit/:username"
            element={<UpdateProfile />}
          />
          <Route exact path="/contents/:id" element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
