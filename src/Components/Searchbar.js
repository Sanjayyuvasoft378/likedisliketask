import React, { useEffect, useState } from "react";
import "../App.css";

function Searchbar() {
  const data = JSON.parse(localStorage.getItem("user-info"));
  const postName = data[0].postName
  console.log("name or");
debugger
  const [serchItems, setSearchItems] = useState();
  const [searchResultItems, setSearchResultItems] = useState();

  const handleChange = (e) => {
    setSearchItems(e.target.value);
  };
  useEffect(() => {
    const get_data = data.filter((postName = postName.toLowerCase().includes(serchItems))
    );
  setSearchResultItems(get_data)},[serchItems]);
  return (
    <div className="App">
      <input type="text" placeholder="Search" value={serchItems} onChange={handleChange}
      />
      <ul>
        {searchResultItems?.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Searchbar;
