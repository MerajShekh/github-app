import React, { useState } from "react";
import { UserContext } from "./context";

import "./App.css";

// boostrap
import "bootstrap/dist/css/bootstrap.min.css";

// Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// COMPONENTS
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import { auth } from "./config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
