import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Feed from "../../component/feed/Feed";
import Rightbar from "../../component/rightbar/Rightbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Topbar from "../../component/topbar/Topbar";
import { findbyTokenwithAxios } from "../../store/features/UserSlice";

function HomePage() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userProfile);
  const getUser = async () => {
    const response = await dispatch(findbyTokenwithAxios(token));
    console.log(response);
  };

  useEffect(() => {
    getUser();
  }, []);

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
