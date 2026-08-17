import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";

function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services/:slug" element={<Service />} />
      </Routes>
    </>
  );
}

export default App;
