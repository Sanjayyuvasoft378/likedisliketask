import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add_post } from "../Redux/Action/Action";
import "./post.css";

function AddPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.postImage = URL.createObjectURL(data.postImage[0]);
    console.log(11111111, data);
    dispatch(add_post(data));
    navigate("/viewfeed");
  };

  return (
    <div>
      <h1>Add Post here...!!!</h1>
      <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
        <div class="container">
          <div class="row">
            <div class="col-10">
              <label for="fname">post Name:</label>
            </div>
            <div class="col-90">
              <input
                type="text"
                id="fname"
                {...register("postName", {
                  required: "enter postName",
                })}
              />
              {errors.postName && <p>postName is required.</p>}
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <label for="fname">Post Image:</label>
            </div>
            <div class="col-90">
              <input
                id="fname"
                type="file"
                {...register("postImage", {
                  required: "enter postImage",
                })}
              />
              {errors.postImage && <p>postImage is required.</p>}
            </div>
          </div>

          <div class="row">
            <input
              type="submit"
              value="Post"
             
            />
          </div>
        </div>
      </form>
    </div>
  );
}
export default AddPost;
