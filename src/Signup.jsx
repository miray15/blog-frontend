
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
          Password confirmation:{" "}
          <input name="password_confirmation" type="password" />
=======
          Password confirmation: <input type="password" />
>>>>>>> parent of a26e259 (add login, logout, and signup syntax from guide)
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
