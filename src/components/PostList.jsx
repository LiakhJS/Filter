import React from "react";

const PostList = ({ sortedList }) => {
  return (
    <ul className="post_list">
      {sortedList.map((elem) => (
        <li key={elem}>{elem}</li>
      ))}
    </ul>
  );
};

export default PostList;
