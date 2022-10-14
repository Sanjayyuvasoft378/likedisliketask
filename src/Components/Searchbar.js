import React from 'react'
import '../App.css';
import { GoSearch } from "react-icons/go";
function Searchbar() {
    const onsubmit = () =>{
        
    }
    return (
        
        <div className="main">
            
         
          <div className="search">
            <input
              id="outlined-basic"
              type="search" 
            placeholder="Search Here"
             
              label="Search" style={{width: "18rem" }}
            /><GoSearch style={{marginLeft: "19rem"}}/>
          </div>
          
        </div>
      );
}

export default Searchbar