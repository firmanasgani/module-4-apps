import "./App.css";
import Register from "./Pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotLoginYet } from "./components/NotLoginYet";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Home from "./Pages/Home";

const HelloWorld = () => {
  const token = localStorage.getItem("token");
  return token ? <Home /> : <NotLoginYet />;
};
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HelloWorld />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<HelloWorld />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
