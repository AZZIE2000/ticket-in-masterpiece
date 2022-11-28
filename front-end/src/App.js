import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import FooterMain from "./components/FooterMain";
import { Route, Routes } from "react-router-dom";
import SingleEvent1 from "./pages/SingleEvent1";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import axios from "axios";
import Profile from "./pages/Profile";
import { AuthProvider } from "./context/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CookiesProvider } from "react-cookie";
import { WebProvider } from "./context/WebContext";
import { CheckoutProvider } from "./context/CheckoutContext";
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Content-Type"] = "application/vnd.api+json";
axios.defaults.headers.post["Accept"] = "application/vnd.api+json";
axios.defaults.withCredentials = true;
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
      <CookiesProvider>
        <GoogleOAuthProvider clientId="766290884424-if3sip56qtto151e6623p5s1vi6ui6n7.apps.googleusercontent.com">
          <WebProvider>
            <AuthProvider>
              <CheckoutProvider>
                <NavBar />

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/single-event/:id" element={<SingleEvent1 />} />
                  <Route path="/checkout" element={<Checkout />} />

                  <Route path="/profile" element={<Profile />} />
                </Routes>
                <FooterMain />
              </CheckoutProvider>
            </AuthProvider>
          </WebProvider>
        </GoogleOAuthProvider>
      </CookiesProvider>
    </>
  );
}

export default App;
