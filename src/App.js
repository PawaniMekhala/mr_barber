import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import OurTeam from "./components/OurTeam";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
// import Test from "./components/Test";
import Review from "./components/Review";
import AppointmentForm from "./components/AppointmentForm";
import BackToHomeArrow from "./components/BackToHomeArrow";
import Staff from "./components/Staff";

function App() {
  return (
    <>
   <Navbar />
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <AboutUs />
              <OurTeam />
              <Services />
              <Pricing />
              <Gallery />
              <Review />
              <AppointmentForm />
            </>
          }
        />

        {/* STAFF PAGE */}
        <Route path="/staff" element={<Staff />} />

        {/* Optional: Appointment Page */}
        {/* <Route path="/appointment" element={<AppointmentForm />} /> */}
      </Routes>

      <Footer />
      <BackToHomeArrow />
      </>
  );

}

export default App;
