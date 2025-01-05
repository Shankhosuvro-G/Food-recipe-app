import React, { useState } from "react";
import "./Mainpage.css";
import Mealcard from "./Mealcard";
const Mainpage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [msg, setmsg] = useState("");
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const myfun = async () => {
    if (search === "") {
      setmsg(
        "This message is shown as you have entered nothing or a dish that doesnt exist. Please enter a valid dish"
      );
    } else {
      const get = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const jsondata = await get.json();
      //   console.log(jsondata.meals);
      if (jsondata.meals) {
        setData(jsondata.meals);
        setmsg("");
      } else {
        setData(null);
        setmsg(
          "This message is shown as you have entered nothing or a dish that doesnt exist. Please enter a valid dish"
        );
      }
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="name">Food Recipe Finder</h1>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Enter a dish"
            onChange={handleInput}
          />
          <button onClick={myfun}>Search</button>
        </div>
        <div className="error">
          <h4>{msg}</h4>
        </div>
        <div>
          <Mealcard detail={data} />
        </div>
      </div>
    </>
  );
};

export default Mainpage;
