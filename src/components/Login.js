import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <Link to={"/course"}>
        <button type="submit" className="signup_button">
          Login In
        </button>
      </Link>
      <div>
        New User ? <Link to={"/signup"}>Sign In</Link>
      </div>
    </div>
  );
}

export default Login;
