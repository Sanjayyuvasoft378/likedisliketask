import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './feeds.css';
import Like from "./Like";
import Comment from "./Comment";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { BsBoxArrowUp ,BsHeart} from "react-icons/bs";
import Searchbar from "./Searchbar";
function ViewFeed() {

    const userInfo = JSON.parse(localStorage.getItem('user-info'))
    const comments = JSON.parse(localStorage.getItem('comments'))
    console.log("dtaa get by commnet",comments)
    const navigater = useNavigate();
    // const dispatch = useDispatch();
    // const response = useSelector((state)=>state?.PostReducer?.Post_Details)
    // useEffect(() => {
    //   dispatch(getPost(response));
    // });
    return (
      <div className="container">
        <Searchbar />
        <button className="addBtn btn btn-primary" onClick={() => navigater('/')}>Add Post</button>
            {
                userInfo.map((item,index)=>(
                  <>
                    <div key={index} className="imgDiv" >
                    <p>{item.postName}</p>
                        <img src={item.postImage ? item.postImage : "https://images.pexels.com/photos/7961265/pexels-photo-7961265.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt='image' />
                        <p>
                      
                        <Like />
                        
                      
                        
                        {/* <FcLikePlaceholder /> */}
                        {/* <BsBoxArrowUp /> */}
                        <Comment id={index} />
                        </p>
                    </div>
                    </>
                ))
                
            }         
      </div>
        );
        }
export default ViewFeed