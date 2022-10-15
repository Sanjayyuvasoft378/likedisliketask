import React from 'react'
import { useForm } from 'react-hook-form';
import '../App.css';
function Searchbar() {
  const onSubmit =()=>{

  }
  const { register, handleSubmit, formState:{errors}} = useForm();
    return (
        
        <div className="main">
          <div className="search">
            <input
              id="outlined-basic"
              type="search" 
            placeholder="Search Here"
             
              label="Search" style={{width: "18rem" }}
            />
          </div>
          
        </div>
      );
}

export default Searchbar