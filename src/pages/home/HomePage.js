import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Feed from "../../component/feed/Feed";
import Topbar from "../../component/topbar/Topbar";
import { findbyTokenwithAxios } from "../../store/features/UserSlice";

function HomePage() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userProfile);
  const getUser = async () => {
    await dispatch(findbyTokenwithAxios(token)).then(console.log(user));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Topbar></Topbar>
      <div className="homeContainer">
        <div>{user.username}</div>
        <Feed></Feed>
        <div>right bar</div>
      </div>
    </>
  );
}

export default HomePage;