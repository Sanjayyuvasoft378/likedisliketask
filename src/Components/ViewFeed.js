import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./feeds.css";
import Like from "./Like";
import { BsFillChatDotsFill } from "react-icons/bs";

function ViewFeed() {
  const [search, setSearch] = useState("");
  const userInfo = JSON.parse(localStorage.getItem("user-info"));
  // const comments = JSON.parse(localStorage.getItem('comments'))
  // console.log("dtaa get by commnet",comments)
  const navigater = useNavigate();
  // const dispatch = useDispatch();
  // const response = useSelector((state)=>state?.PostReducer?.Post_Details)
  // useEffect(() => {
  //   dispatch(getPost(response));
  // });

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const results = !search
    ? userInfo
    : userInfo?.filter((item) =>
        item.postName.toLowerCase().includes(search.toLowerCase())
      );
  return (
    <div className="container">
      <div className="ButtonWrapper">
        <button
          className="addBtn btn btn-primary"
          onClick={() => navigater("/")}
        >
          Add Post
        </button>
      </div>
      <div className="InputWrapper">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search Posts"
          style={{ width: "300px" }}
        />
      </div>
      <div className="ImageWrapper" >
        {results.map((item, index) => (
          
            <div className="MapImageWrapper" key={index}>
              <p value={item.postName}>{item.postName} </p>
              <img  
                src={
                  item.postImage
                    ? item.postImage
                    : "https://images.pexels.com/photos/7961265/pexels-photo-7961265.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                }
                alt="img"
              />
              <Like />
              &nbsp;
              <BsFillChatDotsFill onClick={() => navigater("/comment")} />
              {/* <Comment id={index} /> */}
            </div>
        
        ))}
      </div>
    </div>
  );
}
export default ViewFeed;
