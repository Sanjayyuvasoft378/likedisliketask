import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './feeds.css';
import { FontAwesomeIcon } from 'react-fontawesome'
import { FaRegThumbsUp,FaRegThumbsDown } from 'react-icons/fa';
function ViewFeed() {

    const userInfo = JSON.parse(localStorage.getItem('user-info'))


    const navigater = useNavigate();
    // const dispatch = useDispatch();
    // const response = useSelector((state)=>state?.PostReducer?.Post_Details)
    
    // console.log(123123,response)

    // useEffect(() => {
    //   dispatch(getPost(response));
    // });
 

    return (
        <div className="header">
        <button className="addBtn btn btn-primary" onClick={() => navigater('/')}>Add Post</button>
         <div className="container tableContainer">
            {
                userInfo.map((item,index)=>(
                    <div key={index} className="imgDiv" >
                        <img src={item.postImage} alt='image' />
                        <p>
                        {item.postName}
                        </p>
                        <p className="">
                        <FaRegThumbsUp />
                        <FaRegThumbsDown />
                        </p>
                       
                    </div>
                ))
                
            }
         {/* <table className="table table-dark">
         
          {userInfo?.map((item, index) => {
            return (
              <tbody>
                <tr key={index}>
                  <td>
                    <p>{item.id}</p>
                  </td>
                  <td>
                    <p>{item.postName}</p>
                  </td>
                  <td>
                  <img src= {item.postImage} alt='image' />
                  </td>
                 
                 
                </tr>
              </tbody>
            );
          })}
        </table> */}
        </div>
      </div>
        );
        }
export default ViewFeed