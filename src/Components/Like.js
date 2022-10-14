import React from "react"
import { useState } from "react"
import { FaRegThumbsUp,FaRegThumbsDown } from 'react-icons/fa';

function Like() {
  const [count, setCount] = useState(0)

return (
<>
  <p>{count}</p>
  <FaRegThumbsUp  onClick={() => setCount(count+1)} /> &nbsp;
  
  <FaRegThumbsDown  onClick={() => setCount(count-1)} /> &nbsp;
  </>
)
}
export default Like