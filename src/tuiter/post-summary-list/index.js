import React from "react";
import PostSummaryItem from "./post-summary-item";
import { useSelector } from "react-redux";

const PostSummaryList = () => {
  const { tuits, loading } = useSelector((state) => state.tuitsData);
  return (
    <ul className="list-group">
      {!loading &&
        tuits.map((tuit) => <PostSummaryItem key={tuit._id} post={tuit} />)}
    </ul>
  );
};
export default PostSummaryList;
