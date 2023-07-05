import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

function Create(){

  const [title, setTitle] = useState("");
  const [postContent, setContent] = useState("");
  const postDB = collection(db, "blogPosts");
  let navigate = useNavigate();

  const createPost = async () =>{
    await addDoc(postDB, {
      title,
      postContent,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }, 
    });
    navigate('/');
  };

  return (

    <div className="postPage">
      <div className ="pageContainer">
        <h1>Create a Post</h1>
        <div className="inputContainer">
          <label> Title: </label>
          <input 
            placeholder="Keep it short!"
            onChange={(event) => {
              setTitle(event.target.value);
              }}
          />
        </div>
        <div className="inputContainer">
          <label> Content: </label>
          <textarea 
            placeholder="Write your heart out..."
            onChange={(event) => {
              setContent(event.target.value);
              }}
          />
        
        </div>
        <button onClick={createPost}> Submit Post </button>
      </div>
    </div>
  );
}

export default Create;