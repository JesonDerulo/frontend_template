import axios from "axios";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constants/userConstants";

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    console.log("inside action username", name);
    console.log("inside action username", email);
    console.log("inside action username", password);

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    // Make API call to register endpoint
    const { data } = await axios.post(
      "/api/users/register/",
      { name: name, email: email, password: password },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    console.log(data);



    // Dispatch success action with user details and token
  } catch (error) {
    // Dispatch fail action with error message
   
     dispatch({
       type: USER_REGISTER_FAIL,
       payload:
         error.response && error.response.data.detail
           ? error.response.data.detail
           : error.message,
     });
  }
};
