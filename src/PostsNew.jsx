export function PostsNew() {
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
  );
}
