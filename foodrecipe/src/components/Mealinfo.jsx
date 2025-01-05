import React, { useState } from "react";
import { data, useParams } from "react-router-dom";
import "./Mealinfo.css";
const Mealinfo = () => {
  const { mealid } = useParams();
  const [info, setinfo] = useState();
  //   console.log(mealid);
  const getinfo = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    );
    const jsondata = await get.json();
    // console.log(jsondata.meals[0]);
    setinfo(jsondata.meals[0]);
  };
  // if (info !== "") {
  //   getinfo();
  // }
  getinfo();
  return (
    <div>
      {!info ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="mealInfo">
          <img src={info.strMealThumb} alt="" />
          <div className="ingredients">
            <h1>Ingredients</h1>
            <ul>
              <li>{info.strIngredient1}</li>
              <li>{info.strIngredient2}</li>
              <li>{info.strIngredient3}</li>
              <li>{info.strIngredient4}</li>
              <li>{info.strIngredient5}</li>
              <li>{info.strIngredient6}</li>
              <li>{info.strIngredient7}</li>
              <li>{info.strIngredient8}</li>
              <li>{info.strIngredient9}</li>
              <li>{info.strIngredient10}</li>
              <li>{info.strIngredient11}</li>
              <li>{info.strIngredient12}</li>
              <li>{info.strIngredient13}</li>
              <li>{info.strIngredient14}</li>
              <li>{info.strIngredient15}</li>
              <li>{info.strIngredient16}</li>
              <li>{info.strIngredient17}</li>
              <li>{info.strIngredient18}</li>
              <li>{info.strIngredient19}</li>
              <li>{info.strIngredient20}</li>
              <li>{info.strIngredient21}</li>
            </ul>
          </div>
          <div className="info">
            <h1>Recipe Detail</h1>
            <button>{info.strMeal}</button>
            <h3>Instructions</h3>
            <p>{info.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mealinfo;
