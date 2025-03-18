import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import OurTeam from "./components/OurTeam";
import Services from "./components/Services";
import Gallery from "./components/Gallery";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs/>
      <OurTeam/>
      <Services/>
      <Gallery/>
      <Footer />
    </div>
  );
}

export default App;
