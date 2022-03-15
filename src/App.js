import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import NeoNavbar from "./components/Navbar";
import NeoNavigation from "./components/FixedNavBar";

function App() {
  return (
    <div className="App">
      <NeoNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
      <NeoNavigation />
    </div>
  );
}

export default App;
