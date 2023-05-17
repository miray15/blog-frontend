export function BlogsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();



export function PostsNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handling submit");
    // console.log(event)
    // // make web request to axios
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response.data);
      event.target.reset();
    });
    // send the params
    // clear the form
  };
  return (
    <div>
      <div id="posts-new">
        <h1>New post</h1>

        <form onSubmit={handleSubmit}>
          <div>
            Title: <input name="title" type="text" />
          </div>
          <div>
            Body: <input name="body" type="text" />
          </div>
          <div>
            Image: <input name="image" type="text" />
          </div>
          <button type="Submit">Create Post</button>
        </form>
      </div>
    </div>
  );
}
