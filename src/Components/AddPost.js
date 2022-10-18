import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add_post } from "../Redux/Action/Action";
import "./post.css";
import TagsInput from "./TagsInput";

function AddPost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.postImage = URL.createObjectURL(data.postImage[0]);
    dispatch(add_post(data));
    navigate("/viewfeed");
  };
  
  const [tags, setTags] = React.useState([]);
  const addTags = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
      localStorage.setItem("tag", JSON.stringify(tags));
    }
  };

  return (
    <div>
      <h1>Add Post here...!!!</h1>
      <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
        <div class="container">
          <div class="row">
            <div class="col-10">
              {/* <TagsInput /> */}
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
          <div>
            <input
              type="text"
              onKeyUp={(event) => addTags(event)}
              placeholder="Press enter to add tags"
            />
            {setTags}
          </div>
          <div class="row">
            <input type="submit" value="Post" />
          </div>
        </div>
      </form>
    </div>
  );
}
export default AddPost;
