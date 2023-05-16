export function PostsIndex(props) {
  return (
    <div id="post-index">
      <h1>All Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <img src={post.image} />
        </div>
      ))}
    </div>
  );
}
