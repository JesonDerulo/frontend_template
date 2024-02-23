import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../actions/userActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

function ProfileScreen() {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  useEffect(() => {
    dispatch(getUserDetails("profile"));
  }, [dispatch]);

  console.log(user);
  return (
    <div>
      <h2>User Profile</h2>
      {loading && <Loader />}
      {error && <Message />}
      {user && (
        <div>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Include other user details here */}
        </div>
      )}
    </div>
  );
}

export default ProfileScreen;
