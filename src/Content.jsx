import { Signup } from "./Signup";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import { useState } from "react";
import { Login } from "./Login";

export function Content() {
            const [posts, setPosts] = useState([
              {
                id: 1,
                title: "Hello",
                body: "body",
                image: "image1",
              },
              {
                id: 2,
                title: "hi there",
                body: "body body",
                image: "image2",
              },
              {
                id: 3,
                title: "good day",
                body: "body body body",
                image: "image3",
              },
            ]);

       return (
    <div className="container">
      <Signup />
      <Login /> 
      <PostsNew />
      <PostsIndex post={posts} />
      
      <br />
      <br />

      </div>
) }

     
 