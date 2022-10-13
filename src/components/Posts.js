import React from "react";
import "./Posts.css";

export const Posts = (list) => {
  return (
    <>
      
        {list.list.map((post) => {
        <div  className="posts">
            <div>Id: {post.id}</div>
            <div>Title: {post.title}</div>
            <div>Body: {post.body}</div>
          </div>
        
      })}
    </>
  );
};
