import React from "react";
import Mainpage from "./components/Mainpage";
import { Route, Routes } from "react-router-dom";
import Mealinfo from "./components/Mealinfo";
const App = () => {
  return (
    // <Mainpage />
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/:mealid" element={<Mealinfo />} />
    </Routes>
  );
};

export default App;
