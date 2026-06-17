import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Routes/AboutPage/About";
import Contact from "./Routes/ContactsPage/Contact";
import Home from "./Routes/HomePage/Home";
import Project from "./Routes/ProjectPage/Project";
import Skills from "./Routes/Skills/Skills";
import Education from "./Components/Education/Education";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <ScrollToTop />
    </div>
  );
}

export default App;
