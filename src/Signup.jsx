
export function Signup() {
  return (
    <div id="signup">
      <h1>Signup</h1>
      <form>
        <div>
          Name: <input type="text" />
        </div>
        <div>
          Email: <input type="email" />
        </div>
        <div>
          Password: <input type="password" />
        </div>
        <div>
<<<<<<< HEAD
<<<<<<< HEAD
          Password confirmation:{" "}
          <input name="password_confirmation" type="password" />
=======
          Password confirmation: <input type="password" />
>>>>>>> parent of a26e259 (add login, logout, and signup syntax from guide)
=======
          Password confirmation: <input name="password_confirmation" type="password" />
>>>>>>> parent of 679e82b (add map loop, post.map is broken whyyyyy)
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}