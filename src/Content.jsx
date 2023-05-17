import { Signup } from "./Signup";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import { useState, useEffect } from "react";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    console.log("handleIndexPosts");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div className="container">
      <Signup />
      <Login />
      <LogoutLink />
      <PostsNew />
    </div>
  );
}
