import "./App.css";
import Register from "./Pages/Register";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";

const HelloWorld = () => {
  const token = localStorage.getItem('token')
  return token ? <h1>Get token</h1> : <h1>Helloworld</h1>
}
const App = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route index  path="/" element={<Outlet />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<HelloWorld />} />
        
        </Routes>
      </BrowserRouter>
    </>
  )

};

export default App;
