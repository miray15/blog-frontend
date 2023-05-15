import { useState } from "react";
import { App } from "./Header";
import './index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { PostsIndex } from "./PostsIndex";

export function Header() {
  return (
    <header>
    <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
  </header>
  )
}

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
 
  
  return(
<div>
  <PostsNew />
  <PostsIndex post={posts} />
  
</div>
  )
  }

  function PostsNew(){
    return (
      <div>
      <div id="posts-new">
      <h1>New post</h1>

      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Body: <input type="text" />
        </div>
        <div>
          Image: <input type="text" />
        </div>
        <button type="Submit">Create Post</button>
      </form>
    </div>
      </div>
    )
  }

export function Footer(){
  return(
    <div>
       <footer>
        <p>Copyright 2023</p>
      </footer>
    </div>
  )
}

export default App;