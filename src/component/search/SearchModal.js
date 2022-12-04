import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { findFollowsByToken } from "../../store/features/FollowSlice";
import { findallUser } from "../../store/features/UserSlice";
import ProfileButton from "../profileButton/ProfileButton";

function SearchModal({ query, setHidden }) {
  const userProfileList = useSelector((state) => state.user.userProfileList);
  const currentUserId = useSelector((state) => state.user.currentUserId);
  const follows = useSelector((state) => state.follow.follows);
  const token = useSelector((state) => state.auth.token);
  const followListSize = follows.length;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userProfile);
  const followListSizeIsChange = useSelector(
    (state) => state.follow.followListSizeIsChange
  );
  const [users, setUsers] = useState([]);

  const getAllUSer = async () => {
    const response = await dispatch(findallUser());
    console.log(response);
  };

  const filterUsername = () => {
    query.length > 0
      ? setUsers([
          ...userProfileList.filter(
            (x) =>
              x.username.toLowerCase().includes(query.toLowerCase()) &&
              x.username !== user.username
          ),
        ])
      : setUsers([]);
  };

  const changeHidden = () => {
    setHidden(true);
  };
  useEffect(() => {
    dispatch(findFollowsByToken({ token }));
  }, [followListSizeIsChange]);

  useEffect(() => {
    filterUsername();
  }, [query]);

  useEffect(() => {
    getAllUSer();
  }, []);

  return (
    <div className="absolute top-14 w-120 flex justify-center text-center">
      <div className="w-full max-w-sm p-4 bg-white border rounded-lg  shadow-md sm:p-6 ">
        <ul>
          <h3 className="text-slate-500">Kişiler</h3>

          {users.map((data, index) => (
            <li className="flex justify-between p-3 text-base font-bold text-gray-900 bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray600 dark:hover:bg-gray-50 dark:text-white">
              <Link
                className="flex items-center mx-2  text-base font-bold text-gray-900 bg-gray-50"
                to={`/profile/${data.id}`}
                onClick={changeHidden}
              >
                <img
                  className="rounded-full"
                  src={`https://i.pravatar.cc/50?img=${index}`}
                ></img>
                <span className=" flex-1 ml-3 whitespace-nowrap">
                  {data.username}
                </span>
              </Link>

              {!follows.find((x) => x.followId == data.id) && (
                <ProfileButton
                  followId={data.id}
                  currentUserId={currentUserId}
                  action={"ekle"}
                ></ProfileButton>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchModal;
