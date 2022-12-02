import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Feed from "../../component/feed/Feed";
import Rightbar from "../../component/rightbar/Rightbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Topbar from "../../component/topbar/Topbar";
import {
  findbyTokenwithAxios,
  setUserIdforPosts,
} from "../../store/features/UserSlice";

function HomePage() {
  return (
    <>
      <Topbar></Topbar>
      <div className="homeContainer">
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Rightbar></Rightbar>
      </div>
    </>
  );
}

export default HomePage;
