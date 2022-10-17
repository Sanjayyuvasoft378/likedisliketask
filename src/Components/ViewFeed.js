import React ,{ useState }from "react";
import { useNavigate } from "react-router-dom";
import "./feeds.css";
import Like from "./Like";
import Comment from "./Comment";

function ViewFeed() {

const [search , setSearch] = useState("");
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
  const results = !search ? userInfo : userInfo?.filter((item) => 
  item.postName.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="container">
    <div class="gallery">
    <figure class="gallery__item gallery__item--1">
    <button className="addBtn btn btn-primary" onClick={() => navigater("/")}>
        Add Post
      </button>

     
      <input
        type="text"
        className="searchbar"
        onChange={handleSearch}
        placeholder="Search Posts"
        style={{ width : "300px" }}
      />

      {results.map((item, index) => (
        <>
          <div key={index} className="imgDiv">
            <p value={item.postName} className="gallery__img">{item.postName} </p>
            <img
              src={
                item.postImage
                  ? item.postImage
                  : "https://images.pexels.com/photos/7961265/pexels-photo-7961265.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              }
              alt="image"
            />
            <Like />
            <Comment id={index} />
          </div>
        </>
      ))}
  </figure>
    </div>

      
    </div>
  );
}
export default ViewFeed;
