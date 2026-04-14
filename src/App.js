import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./components/OurTeam";
import Services from "./pages/Services";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
// import Test from "./components/Test";
import Review from "./components/Review";
import AppointmentForm from "./components/AppointmentForm";
import BackToHomeArrow from "./components/BackToHomeArrow";
import Staff from "./pages/Staff";
import StaffDetails from "./pages/StaffDetails";

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
              {/* <StaffDetails /> */}
            </>
          }
        />


        {/* STAFF PAGE */}
        <Route path="/staff" element={<Staff />} />
        <Route path="/staff/:id" element={<StaffDetails />} />

        {/* Optional: Appointment Page */}
        {/* <Route path="/appointment" element={<AppointmentForm />} /> */}
      </Routes>

      <Footer />
      <BackToHomeArrow />
      </>
  );

}

export default App;
