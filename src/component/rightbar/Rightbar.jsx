import "./rightbar.css";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { getFollowsFetch } from "../../store/features/FollowSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Rightbar({ profile, id }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {/* {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))} */}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    const users = useSelector((state) => state.follow.userProfileList);
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const currentUserId = useSelector((state) => state.user.currentUserId);
    //const myprofile =
    //   id != currentUserId ? users.find((x) => x.id == id) : profile;

    const getFollows = () => {
      dispatch(getFollowsFetch({ token: token, id: id }));
    };

    useEffect(() => {
      getFollows();
    }, [id]);

    return (
      <>
        <div className="flex justify-center">
          <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
            <div className="py-3 px-6 border-b border-gray-300">
              {profile?.name}
            </div>
            <div className="p-6">
              <h4 className="text-gray-900 text-xl font-medium mb-2">
                User Information
              </h4>
              <div className="flex flex-col justify-center">
                <div className="flex flex-row rightbarInfoItem">
                  <div className="rightbarInfoKey">City:</div>
                  <div className="rightbarInfoValue">{profile?.address}</div>
                </div>
                <div className="flex flex-row rightbarInfoItem">
                  <div className="rightbarInfoKey">Email:</div>
                  <div className="rightbarInfoValue">{profile?.email}</div>
                </div>
                <div className="flex flex-row rightbarInfoItem">
                  <div className="rightbarInfoKey">Phone:</div>
                  <div className="rightbarInfoValue">{profile?.phone}</div>
                </div>
              </div>
              <h4 className="text-gray-900 text-xl font-medium mb-2">
                Hakkımda
              </h4>
              <p class="text-gray-700 text-base mb-4">
                With supporting text below as a natural lead-in to additional
                content. {profile?.about}
              </p>
            </div>
            <div class="flex justify-center py-3 px-6 border-t border-gray-300 text-gray-600">
              <button
                type="button"
                className=" flex flex-row justify-center px-6 py-2.5 bg-lime-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-purple-500 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                <div>Profile Edit</div>
                <EditIcon> </EditIcon>
              </button>
            </div>
          </div>
        </div>
        <h4 className="rightbarTitle">Arkadaşlarım</h4>
        <div className="rightbarFollowings">
          {users.map((data, index) => (
            <Link key={data.id} to={`/profile/${data.id}`}>
              <div className="rightbarFollowing rounded-full">
                <img
                  src="assets/person/1.jpeg"
                  alt=""
                  className="rightbarFollowingImg rounded-full"
                />
                <span className="rightbarFollowingName">{data.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
