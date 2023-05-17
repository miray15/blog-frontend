import axios from "axios";

export function BlogsShow(props) {
  const handleSubmit = (event) => {
    // stop normal HTML form behavior
    event.preventDefault();
    // make request to rails
    const params = new FormData(event.target);
    axios
      .patch("http://localhost:3000/blogs/29.json", params)
      .then((response) => {
        console.log(response.data);
      });
    console.log("handling submit");
  };
  console.log(props.blog);
  return (
    <div>
      <p>
        <b>id:</b>
        {props.blog.id}
      </p>
      <p>
        <b>title:</b>
        {props.blog.title}
      </p>
      <p>
        <b>body:</b>
        {props.blog.body}
      </p>
      <p>
        <b>image_url:</b>
        {props.blog.image_url}
      </p>

      <form onSubmit={handleSubmit}>
        <p>
          Title: <input name="title" type="text" />
        </p>
        <p>
          Ingredients: <input name="ingredients" type="text" />
        </p>
        <p>
          Directions: <input name="directions" type="text" />
        </p>
        <p>
          Prep time: <input name="prep_time" type="text" />
        </p>
        <p>
          Image Url : <input name="image_url" type="text" />
        </p>
        <p>
          Chef : <input name="chef" type="text" />
        </p>
        <button type="input">Update recipe</button>
      </form>
    </div>
  );
}
