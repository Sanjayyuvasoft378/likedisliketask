import React from "react";
import { useForm } from "react-hook-form";
import "./feeds.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Comment() {
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
      
    </div>
  );
}

export default Comment;
