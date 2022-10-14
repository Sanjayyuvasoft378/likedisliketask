import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./feeds.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Comment(props) {
  console.log(1234,props)
  const [count, setCount] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
    const list = JSON.parse(localStorage.getItem("comments"));
    const getData = list ? list : [];
    localStorage.setItem("comments", JSON.stringify([...getData, data?.comment])
    );
    reset();
  };
  const showComments = JSON.parse(localStorage.getItem("comments"));
  
  return (
    <div className="container">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="inpField" >
          <Form.Control
            type="search" 
            placeholder="Comment"
            {...register("comment", { required: "enter comment" })}
          />
          {errors.comment && <p>comment is required.</p>}
          <Button variant="primary" className="commentBtn" type="submit">
          Post
        </Button>
        </Form.Group>
      </Form>
      {showComments}
      {/* <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname" >Comment</label>
            </div>
            <div className="col-75">
              <input 
                {...register("comment", {
                  required: "enter comment",
                })}
              />
              {errors.comment && <p>comment is required.</p>}
               <input  id="comment-btn" type="submit" value="Submit" />
               <div>{showComments}</div>
            </div>
          </div>
        </form> */}
    </div>
  );
}

export default Comment;
