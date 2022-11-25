import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findallPostFetch } from "../../store/features/PostSlice";
import Post from "../post/Post";
import Share from "../share/Share";

function Feed() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.postList);

  const getAllPost = async () => {
    const response = await dispatch(findallPostFetch());
    console.log(response);
  };
  useEffect(() => {
    getAllPost();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share></Share>
        {posts.map((p) => (
          <Post key={p.id} post={p}></Post>
        ))}
      </div>
    </div>
  );
}

export default Feed;
