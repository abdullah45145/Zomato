import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ---- Pages ----
import Loginpage from "./pages/Loginpage";
import Home from "./pages/Home";
import Logoutpage from "./pages/Logoutpage";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/logoutpage" element={<Logoutpage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
