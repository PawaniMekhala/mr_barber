import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import OurTeam from "./components/OurTeam";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Test from "./components/Test";
import Review from "./components/Review";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs/>
      <OurTeam/>
      <Services/>
      <Pricing/>
      <Gallery/>
      <Review/>
      <Test/>
      <Footer />
    </div>
  );
}

export default App;
