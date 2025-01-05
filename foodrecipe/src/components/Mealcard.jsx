import React from "react";
import "./Mealcard.css";
import { NavLink } from "react-router-dom";
const Mealcard = ({ detail }) => {
  //   console.log(detail);
  return (
    <div className="meals">
      {!detail
        ? ""
        : detail.map((curItem) => {
            return (
              <div className="mealImg">
                <img src={curItem.strMealThumb} alt="" />
                <p>{curItem.strMeal}</p>
                <NavLink to={`/${curItem.idMeal}`}>
                  <button>Recipe</button>
                </NavLink>
              </div>
            );
          })}
    </div>
  );
};

export default Mealcard;
