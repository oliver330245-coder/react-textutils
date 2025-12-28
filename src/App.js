import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Router> */}

      <Navbar title="TextUtils" />

      <div className="container my-4">
        {/* <Routes>
          <Route
            path="/"
            element={<TextForm heading="Enter your text below" />}
          />
          <Route path="/about" element={<About />} />
        </Routes> */}

        {/* Router ke baghair direct component */}
        <TextForm heading="Enter your text below" />
      </div>

      {/* </Router> */}
    </>
  );
}

export default App;
