import "./App.css";

import Home from "./pages/Home";
import Missing from "./components/Missing";
import { Routes, Route } from "react-router-dom";

import HomeLayout from "./components/global/Home/HomeLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  return (
    <div className="bg-gray-900">
      <Routes>
        {/* 404 Page */}
        <Route path="*" element={<Missing />} />

        {/* Terms and Conditions - Separate Route */}
        <Route path="/termsandconditions" element={<TermsAndConditions />} />

        {/* Home Layout - For other pages */}
        <Route path="/" element={<HomeLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
