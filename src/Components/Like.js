import React from "react"
import { useState } from "react"
import { FaRegThumbsUp,FaRegThumbsDown } from 'react-icons/fa';

import { FcLike } from "react-icons/fc";
import { BsHeart} from "react-icons/bs";
function Like() {
  const [count, setCount] = useState(0)

  const [ click , setClick ] = useState(false);

return (
<>
  <p>{count}</p>
  <FaRegThumbsUp  onClick={() => setCount(1)} /> &nbsp;
  
  <FaRegThumbsDown  onClick={() => setCount(0)} /> &nbsp;

  {
                          click ?
                          <FcLike style={{fontSize : "24px"}} onClick={()=>setClick(false)} />:
                          <BsHeart  onClick={()=>setClick(true)}/>
                        }

  </>
)
}
export default Like