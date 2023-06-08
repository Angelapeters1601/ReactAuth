import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h2>Testing how to authenticate a react app!</h2>
      <p>The dark mode is so cool lol.</p>
      <Link to="/Login">Login</Link>
      <Link to="/SignUp">Sign Up</Link>
    </div>
  );
}

export default Home;
