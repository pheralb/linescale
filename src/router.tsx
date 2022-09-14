import { Route, Routes } from "react-router-dom";

// Pages =>
import Home from "./pages/home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
