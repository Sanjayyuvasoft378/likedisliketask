import { ADD_POST, GET_POST } from "../Type";

export const add_post = (data) => {
  console.log("first", data.postImage[0].name);
  const list = JSON.parse(localStorage.getItem("user-info"));
  const get_data = list ? list : [];
  localStorage.setItem("user-info", JSON.stringify([...get_data, data]));
// redux
  return {
    type: ADD_POST,
    payload: data,
  };
};

export const getPost = (res) => {
  return (dispatch) => {
    dispatch({
      type: GET_POST,
      payload: res,
    });
  };
};
