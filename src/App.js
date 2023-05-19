import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import SocialBar from "./components/SocialBar/SocialBar";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <SocialBar/>
    </div>
  );
}

export default App;
