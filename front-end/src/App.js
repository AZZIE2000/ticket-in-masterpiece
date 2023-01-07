import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
import SingleEvent1 from "./pages/SingleEvent1";
import Checkout from "./pages/Checkout";
import { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./pages/Profile";
import { AuthProvider } from "./context/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CookiesProvider } from "react-cookie";
import { WebProvider } from "./context/WebContext";
import { CheckoutProvider } from "./context/CheckoutContext";
import FooterMain from "./components/navs/FooterMain";
import NavBar from "./components/navs/NavBar";
import Dashboard from "./dashboard/pages/Dashboard";
import UserEnd from "./pages/UserEnd";
import Statistics from "./dashboard/pages/Statistics";
import EditTicket from "./dashboard/pages/EditTicket";
import ManageCategories from "./dashboard/pages/ManageCategories";
import { AdminProvider } from "./context/AdminContext";
import { useLocation } from "react-router-dom";
import EditConcert from "./dashboard/pages/EditConcert";
import AddConcert from "./dashboard/pages/AddConcert";
import ScanTickets from "./dashboard/pages/ScanTickets";
import SellTickets from "./dashboard/pages/SellTickets";
import Test from "./Test";
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Content-Type"] = "application/vnd.api+json";
axios.defaults.headers.post["Accept"] = "application/vnd.api+json";
axios.defaults.withCredentials = true;
const stripePromise = loadStripe(
  "pk_test_51M9pdLIJCmPFOqdlGNHTz5jvNF9pGJCGeaOFSSvEVccFLhav51yigxHuxnxI63IZtZ6yQ2DvUdOc20PLfQeC6XOj00Kr7bCdX9"
);
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
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      // behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);
  return (
    <>
      <Elements stripe={stripePromise}>
        <AdminProvider>
          <CookiesProvider>
            <GoogleOAuthProvider clientId="766290884424-if3sip56qtto151e6623p5s1vi6ui6n7.apps.googleusercontent.com">
              <WebProvider>
                <AuthProvider>
                  <CheckoutProvider>
                    <Routes>
                      <Route path="/" element={<UserEnd />}>
                        <Route path="/" element={<Home />} />
                        <Route
                          path="/single-event/:id"
                          element={<SingleEvent1 />}
                        />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/profile" element={<Profile />} />
                      </Route>
                      <Route path="/" element={<Dashboard />}>
                        <Route
                          path="/dashboard/statistics"
                          element={<Statistics />}
                        />
                        <Route
                          path="/edit/single/ticket"
                          element={<EditTicket />}
                        />
                        <Route
                          path="/manage/categories"
                          element={<ManageCategories />}
                        />
                        <Route path="/edit/concert" element={<EditConcert />} />
                        <Route path="/add/concert" element={<AddConcert />} />
                        <Route path="/scan" element={<ScanTickets />} />
                        <Route path="/pos/tickets" element={<SellTickets />} />
                      </Route>
                    </Routes>
                  </CheckoutProvider>
                </AuthProvider>
              </WebProvider>
            </GoogleOAuthProvider>
          </CookiesProvider>
        </AdminProvider>
      </Elements>
      {/* <Routes>
        <Route path="/" element={<Test />} />
      </Routes> */}
      {/* <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes> */}
    </>
  );
}

export default App;
