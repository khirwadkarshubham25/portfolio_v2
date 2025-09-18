import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Certification from "./components/Certification";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <WorkExperience />
      <Skills />
      <Projects />
      <Education />
      <Certification />
      <Contact />
    </div>
  );
}

export default App;
