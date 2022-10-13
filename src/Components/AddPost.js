import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add_post } from '../Redux/Action/Action';
import './post.css';

function AddPost() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [state,setState] = useState();
    const {register, handleSubmit, formState:{errors}} = useForm(); 
    const onSubmit = (data) => {
        data.postImage=URL.createObjectURL(data.postImage[0])
        console.log(11111111,data);
        dispatch(add_post(data))
        navigate("/viewfeed")
    }
    
    return (
        <>
          <h1>Add Post here...!!!</h1>
          <div className="container">
            <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="fname">post Name</label>
                </div>
                <div className="col-75">
                  <input
                    {...register("postName", {
                      required: "enter postName",
                    })}
                  />
                  {errors.postName && <p>postName is required.</p>}
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="fname">Post Image</label>
                </div>
                <div className="col-75">
                  <input type='file'
                    {...register("postImage", {
                      required: "enter postImage",
                    })}
                  />
                  {errors.postImage && <p>postImage is required.</p>}
                </div>
              </div>
             
    
              <div className="row">
                <input type="submit" value="Submit" />
              </div>
              <br />
            </form>
           
         
            {/* <th ><img src= {state?URL.createObjectURL(state):""} style={{marginLeft: "-38rem"}}/></th> */}
          </div>
        </>
      );
    }


export default AddPost