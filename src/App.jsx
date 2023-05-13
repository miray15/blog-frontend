function Header() {
  return (
    <header>
    <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
  </header>
  )
}

function Content() {
  return(
<div>
  <PostsNew />
  <PostsIndex />
  
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

function PostsIndex(){
  return(
    <div>
      <div id="Posts Index">
      <h1>All Posts</h1>
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