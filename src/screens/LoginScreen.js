import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../actions/userActions";
import { Link } from "react-router-dom";

function LoginScreen({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      console.log("user Logined");
    }
  }, [history, userInfo]);

  const logoutHandler = (e) => {
    e.preventDefault();
   
    dispatch(logout());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    dispatch(login(email, password));
  };
  return (
    <div>
      {" "}
      <h2>LoginScreen</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      New user? <Link to={"/register/"}>Register</Link>
      {userInfo ? <button onClick={logoutHandler}>Logout</button> : null}
    </div>
  );
}

export default LoginScreen;
