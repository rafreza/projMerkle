
import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../Firebase";

function Home({isAuth}){
  const [blogLists, setBlogLists] = useState([]);
  const postDB = collection(db, "blogPosts");

  useEffect(() => {
    const getBlogs= async() => {
      const data = await getDocs(postDB);
      setBlogLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }; 
    getBlogs(); 
  }, [deleteBlog]);

  const deleteBlog = async (id) => {
    const postDoc = doc(db, "blogPosts", id);
    await deleteDoc(postDoc);
  };

  return (
    <div className="homePage">
      {blogLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deleteBlog(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )}
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