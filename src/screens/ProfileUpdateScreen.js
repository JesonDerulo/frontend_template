import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useNavigate } from "react-router-dom";

function ProfileUpdateScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate()

  // get the user info from the state
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  //
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;
  
  // get userLogin from the state
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

 useEffect(() => {
   if (!userInfo) {
     navigate("/login");
   } else {
     if (!user || !user.name || success || userInfo._id !== user._id) {
       dispatch(getUserDetails("profile"));

       // Reset the success message after 5 seconds
       setTimeout(() => {
         dispatch({ type: USER_UPDATE_PROFILE_RESET });
       }, 5000);
       
     } else {
       setUsername(user.username);
       setEmail(user.email);
       
     }
   }
 }, [dispatch, navigate, userInfo, user, success]);

      
      


  const submitHandler = (e) => {
    e.preventDefault();
    console.log("update user form submited!!!!!");
    
    dispatch(
      updateUserProfile({
        username: username,
        email: email,
      })
    );
  };



  return (
    <div>
     
        {" "}
        <h2>User Profile Form</h2>
        {success && <p>updated user info!</p>}
        {error && <Message error={error} />}
        {loading && <Loader />}
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit"> Update Info</button>
        </form>
     
    </div>
  );
}

export default ProfileUpdateScreen;
