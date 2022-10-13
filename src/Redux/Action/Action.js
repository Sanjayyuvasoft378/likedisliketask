import {ADD_POST,GET_POST} from '../Type'

export const add_post = (data) =>{
    // const send_data = {
    //     postName :data.postName,
    //     postImage: data.postImage[0].name
    // }
    console.log("first",data.postImage[0].name)
    const list=JSON.parse(localStorage.getItem('user-info'))
    const get_data = list ? list : []
    localStorage.setItem("user-info", JSON.stringify([...get_data,data]))
    debugger;
    return {
    type:ADD_POST,
    payload:data
    }
}

export const getPost = (res) => {
    return (dispatch) => {
      
          dispatch({
            type: GET_POST,
            payload: res
          });
    };
  };