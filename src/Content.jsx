import { useState, useEffect } from "react";
import axios from "axios";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
// import { PostsShow } from "./PostsShow";
// import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink"; //

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost setCurrentPost] = useState({});
  const handleIndexPosts = () => {
  
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      
      setPosts(response.data);
    });
  };
  useEffect(handleIndexPosts, []);
  const handleShowPost = (myPost) => {
    console.log(myPost);
    console.log(
      "handling show Post.eventually this will change the value of isPostsShowVisible and trigger the modal"
    );
    setIsPostsShowVisible(true);
    setCurrentPost(myPost);
  };

  const handleClose = () => {
    console.log("close modal");
    setIsPostsShowVisible(false);
  };

  const handleCreatePost = (params) => {
    axios
      .post("http://localhost:3000/posts.json", params)
      .then((response) => {
        console.log(response.data);
  
        setPosts([...posts, response.data]);
      });
    console.log("handling create post");
  };

  return (
    <div className="container">
      <Signup />
      <Login />
      <LogoutLink />
      <PostsNew onCreatePost={handleCreatePost} />
      <PostsIndex post={posts} />
      <br />
      <br />
      <br />
    </div>
  );
}
