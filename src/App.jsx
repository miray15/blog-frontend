import { useState } from "react";

function Header() {
  return (
    <header>
    <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
  </header>
  )
}

function Content() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Raw Eggs",
      chef: "Peter Jang",
      image_url: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg",
    },
    {
      id: 2,
      title: "Mud Pie",
      chef: "Jay Wengrow",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2017/12/mud-pie-XL-RECIPE2016.jpg",
    },
    {
      id: 3,
      title: "Pizza!!!!",
      chef: "Jay Wengrow",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2021/06/15/mozzarella-pizza-margherita-FT-RECIPE0621.jpg",
    },
  ])
    
  
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

function PostsIndex(props){
  return(
    <div>
      <div id="Posts Index">
        <h1>All Posts</h1>
        {/* {props.posts.map(post => (
          <div key={post.id} className="posts">
            <h2>{post.title}</h2>
            <img src={post.description} alt="" />
            <p>Chef: {post.image}</p>
            <button>More info</button> */}
      </div>  
      {/* ))} */}

      <div className="Posts">
        <h2>Where's Waldo</h2>
        <p>A children's book also loved by some adults fascinated with the prospect of finding a strange man in stripes</p>
        <img src="https://123sonography.com/sites/default/files/article/images/2_Waldo_Illustration.png" alt="Not always great for children as you can see - a woman is naked in the top right corner" />
      
        <h2>Chocolate Candy</h2>
        <p>Candy adored by most, except those with allergies</p>
        <img src="https://s7d2.scene7.com/is/image/hersheysassets/0_34000_00244_3_701_24400_027_Item_Front?fmt=webp-alpha&hei=908&qlt=75" alt="an unpopular candy that I love" />

        <h2>Cat slippers</h2>
        <p>Uncommon in the United States; more common in vending machines in Japan</p>
        <img src="https://d.newsweek.com/en/full/2006699/cat-nike-shoes.jpg?w=790&f=74826cb8ff5b079fb9b3c78af548ecfa" alt="undeniably adorable" />
      </div>
    </div>


  )
}

function Footer(){
  return(
    <div>
       <footer>
        <p>Copyright 2023</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <div>
     <Header />
     <Content /> 
     <Footer />
    </div>
  );
}

export default App;