import { Routes, Route } from "react-router-dom";
import Home from "pages/home/index";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
