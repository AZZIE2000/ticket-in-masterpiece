import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import FooterMain from "./components/FooterMain";
import { Route, Routes } from "react-router-dom";
import SingleEvent1 from "./pages/SingleEvent1";
import Checkout from "./pages/Checkout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useState } from "react";
import Game from "./Game";
import Profile from "./pages/Profile";

function App() {
  const [num, setNum] = useState(0);

  function add() {
    if (num < 10) {
      setNum(num + 1);
    }
  }
  function remove() {
    if (num > 0) {
      setNum(num - 1);
    }
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-event" element={<SingleEvent1 />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <FooterMain />

      {/* <h1 className="text-center mb-10 text-4xl">{num}</h1>
      <div className="container mx-auto w-full flex justify-center">
        <button onClick={() => remove()} className="bg-candy px-5 py-3 rounded">
          Remove
        </button>
        <button onClick={() => add()} className="bg-candy px-5 py-3 rounded">
          Add
        </button>
      </div> */}
      {/* <Game /> */}
    </>
  );
}

export default App;
