import Feed from "../../component/feed/Feed";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rightbar from "../../component/rightbar/Rightbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Topbar from "../../component/topbar/Topbar";
import {
  findbyTokenwithAxios,
  findByUserId,
} from "../../store/features/UserSlice";
import "./profile.css";
import { useParams } from "react-router-dom";

function Profile() {
  const { id } = useParams();
  const myuser = useSelector((state) => state.user.userProfile);
  const otheruser = useSelector((state) => state.user.otherUserProfile);
  // const users = useSelector((state) => state.follow.userProfileList);
  const currentUserId = useSelector((state) => state.user.currentUserId);
  // const myprofile = id != currentUserId ? users.find((x) => x.id == id) : user;
  const dispatch = useDispatch();
  const user = id != currentUserId ? otheruser : myuser;

  const getUSer = () => {
    dispatch(findByUserId(id));
  };

  useEffect(() => {
    if (id != currentUserId) {
      getUSer();
    }
  }, [id]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="../../assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="../../assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed id={id}></Feed>
            <Rightbar profile={user} id={id} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
