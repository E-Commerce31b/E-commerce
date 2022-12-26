import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Stripe from "./components/Stripe";
import ProductDetail from "./components/ProductDetail";
import ProductsList from "./components/ProductsList";
import Landing from "./components/Landing";
import BestSellers from "./components/BestSellers";
import Offers from "./components/Offers";
import Record from "./components/Record";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/Signup";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import "./App.js";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
  <AuthProvider>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/details/:id" element={<ProductDetail />} />
      <Route path="/home" element={<Home />} />
      <Route path="/bestsellers" element={<BestSellers />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/record" element={<Record />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/update-profile" element={<UpdateProfile />} />
      <Route path="/stripe" element={<Stripe />} />
      <Route path="/list/:category" element={<ProductsList />} />
      <Route path="/list/:name" element={<ProductsList />} />
    </Routes>
  </AuthProvider>

  );
}

export default App;
