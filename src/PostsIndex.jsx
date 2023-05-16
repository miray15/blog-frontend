import './index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export function PostsIndex(props) {
  return (
    <div>
      <div id="Posts Index">



        
        <h1>All Posts</h1>


       

        <div className="Posts">
          <h2>Where is Waldo</h2>
          <p>A book for children also loved by some adults fascinated with the prospect of finding a strange man in stripes</p>
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


  );
}
