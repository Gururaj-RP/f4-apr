import React, { useState } from "react";
import "./Post.css";

function Post(post) {
  const [like, setLike] = useState(0);

  return (
    <div className="post">
      <img
        className="postImage"
        //src={` https://picsum.photos/200?random=${props.number}`}
        src={` https://picsum.photos/200?random=${post.id}`}
        //alt=""
      />
      <div className="postDetails">
        
        <p>User ID :{post.id}</p>
        <p>id :{post.id}</p>
        <p id="title">Title :{post.title}</p>
        <p>body :{post.body}</p>
        
        
        
      </div>
      
    </div>
  );
}

export default Post;