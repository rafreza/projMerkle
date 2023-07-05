import React from "react";

function Create(){
  return (
    <div className="postPage">
      <div className ="pageContainer">
        <h1>Create a Post</h1>
        <div className="inputContainer">
          <label> Title: </label>
          <input placeholder="Keep it short!"/>
        </div>
        <div className="inputContainer">
          <label> Content: </label>
          <input placeholder="Write your heart out..."/>
        </div>
        <button> Submit Post </button>
      </div>
    </div>
  );
}

export default Create;