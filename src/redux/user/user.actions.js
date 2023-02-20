import { API } from "../../shared/api";

export const loginUser = (formdata, navigate) => async (dispatch) => {
  dispatch({ type: "login_user_start" });
  try {
    const result = await API.post("/user/login", formdata);
    dispatch({ type: "login_user_ok", payload: result.data });
    localStorage.setItem("token", result.data.token);
    dispatch(checkSession(result.data.token, navigate));
  } catch (error) {
    dispatch({ type: "login_user_error", payload: error.message });
  }
};

export const logoutUser = (navigate) => async (dispatch) => {
  await dispatch({ type: "logout_user_start" });
  try {
    dispatch({ type: "logout_user_ok" });
    localStorage.removeItem("token");
    localStorage.clear();
    navigate("/login");
  } catch (error) {
    dispatch({ type: "logout_user_error", payload: error.message });
  }
};

export const newUser = (formdata, navigate) => async (dispatch) => {
  dispatch({ type: "register_user_start" });
  try {
    const result = await API.post("user/register", formdata);
    console.log(result);
    dispatch({ type: "register_user_ok" });
    navigate("/login");
  } catch (error) {
    dispatch({ type: "register_user_error" });
  }
};

export const checkSession = (token, navigate) => async (dispatch) => {
  dispatch({ type: "checkSession_start" });
  try {
    const result = await API.get("user/checksession");
    console.log(result);
    dispatch({
      type: "checkSession_ok",
      payload: { user: result.data, token: token },
    });
    localStorage.setItem("token", token);
    navigate("/");
  } catch (error) {
    dispatch({ type: "checkSession_error" });
    localStorage.removeItem("token");
    localStorage.clear();
    navigate("/login");
  }
};
