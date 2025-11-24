import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ---- Pages ----
import Loginpage from "./pages/Loginpage";
import Home from "./pages/Home";
import Logoutpage from "./pages/Logoutpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/logout" element={<Logoutpage />} />

        {/* 404 Page */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
