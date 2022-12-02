import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  findallMYFollowPost2Fetch,
  findallMYFollowPostFetch,
  findallPostFetch,
  findMyPostFetch,
} from "../../store/features/PostSlice";
import {
  findbyTokenwithAxios,
  setUserIdforPosts,
} from "../../store/features/UserSlice";
import Post from "../post/Post";
import Share from "../share/Share";

function Feed({ id }) {
  const dispatch = useDispatch();
  const otherPostList = useSelector((state) => state.post.postList);
  const myPostList = useSelector((state) => state.post.myPostList);
  const token = useSelector((state) => state.auth.token);
  const currentUserId = useSelector((state) => state.user.currentUserId);
  const [postList, setPostList] = useState([]);
  const posts =
    id === undefined || currentUserId == null || id != currentUserId
      ? otherPostList
      : myPostList;

  const getMyFollowPosts2 = async () => {
    if (id == currentUserId || currentUserId == null) {
      const response = await dispatch(
        findallMYFollowPost2Fetch({ token: token, id: null })
      );
      setPostList([...response.payload]);
    } else {
      const response = await dispatch(
        findallMYFollowPost2Fetch({ token: token, id: id })
      );
      setPostList([...response.payload]);
    }
  };

  const getMyPost = async () => {
    const response = await dispatch(findMyPostFetch({ token }));
    setPostList([...response.payload]);
    console.log(response);
  };

  useEffect(() => {
    if (id == undefined || currentUserId == null || id != currentUserId) {
      getMyFollowPosts2();
    } else {
      getMyPost();
    }
  }, [id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {id === undefined || currentUserId === id ? <Share></Share> : ""}
        {posts?.map((p) => (
          <Post key={p.id} post={p}></Post>
        ))}
      </div>
    </div>
  );
}

export default Feed;
