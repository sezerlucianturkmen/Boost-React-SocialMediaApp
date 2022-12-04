import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import { useDispatch, useSelector } from "react-redux";
import { createfollows, deleteFollow } from "../../store/features/FollowSlice";
import { useNavigate } from "react-router-dom";
function ProfileButton({ text, action, followId, currentUserId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const clasname =
    action == "ekle"
      ? "mx-4 px-2 py-3 bg-lime-600 text-white font-medium text-sm leading-tight uppercase rounded-lg shadow-md hover:bg-purple-500 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      : "mx-4 px-2 py-3 bg-purple-500 text-white font-medium text-sm leading-tight uppercase rounded-lg shadow-md hover:bg-purple-500 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out";
  const icon =
    action == "ekle" ? (
      <PersonAddIcon></PersonAddIcon>
    ) : (
      <PersonRemoveIcon></PersonRemoveIcon>
    );

  const addFollow = () => {
    dispatch(createfollows({ userId: currentUserId, followId: followId }));
  };
  const removeFollow = () => {
    dispatch(deleteFollow({ token, followId }));
  };
  const onclick = () => {
    if (action === "ekle") {
      addFollow();
    } else {
      removeFollow();
    }
    navigate(`/profile/${currentUserId}`);
  };

  return (
    <button className={clasname} onClick={onclick}>
      <div className="flex flex-row justify-center">
        <div className="text-center">{icon}</div>
        <div className="mx-2"> {text}</div>
      </div>
    </button>
  );
}

export default ProfileButton;
