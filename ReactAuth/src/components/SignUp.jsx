import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="signup">
      <h2>New User ? Sign Up Please!</h2>
      <form action="signup.php" method="POST">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Full-name"
          name="name"
          required
        />
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter E-mail"
          name="email"
          required
        />
        <label for="password">Password:</label>
        <input
          type="password"
          placeholder="Enter Password"
          id="password"
          name="password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/Login">Login</Link>
      <Link to="/Home">Back to Home Page</Link>
    </div>
  );
}

export default SignUp;
