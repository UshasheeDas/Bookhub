import React from "react";
import { Routes, Route } from "react-router-dom";
import BookhubLanding from "./pages/landing/landing";
import SellerDashboard from "./pages/seller/sellerDashboard";
import SellerLogin from "./pages/seller/sellerLogin";
import SellerSignup from "./pages/seller/sellerSignup";

function AppMain() {
  return (
    <Routes>
      <Route path="/" element={<BookhubLanding />} />
      <Route path="/seller/login" element={<SellerLogin />} />
      <Route path="/seller/signup" element={<SellerSignup />} />
      <Route path="/seller/dashboard" element={<SellerDashboard />} />
    </Routes>
  );
}

export default AppMain;
