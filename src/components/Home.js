
import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../Firebase";

function Home({isAuth}){
  const [blogList, setBlogList] = useState([]);
  const postDB = collection(db, "blogPosts"); 

  useEffect(() => {
    const  getBlogs = async() =>{
      const data = await getDocs(postDB);
      console.log(data.docs.map((doc) => ({...doc.data, id: doc.id, name: doc.id.name})));
      // setBlogList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBlogs();
  });
  // const deletePost = async(id) => {
  //   const postDoc = doc(db, "blogPost", id);
  //   await deleteDoc(postDoc);
  // }
  return (
    <div className="homePage">
      {blogList.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              <div className="deletePost">
                {/* {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )} */}
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Home;