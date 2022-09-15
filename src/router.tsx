import { Route, Routes } from "react-router-dom";

// Pages =>
import Home from "./pages/home";
import About from "./pages/about";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Router;
