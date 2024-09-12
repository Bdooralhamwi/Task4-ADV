import ContactUs from "./components/ContactUs/ContactUs";
import Departments from "./components/Departments/Departments";
import Doctors from "./components/Doctors/Doctors";
import Footer from "./components/Footer/Footer";
import Frequently from "./components/Frequently/Frequently";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import Pricing from "./components/Pricing/Pricing";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import  SectionHero from "./components/SectionHero/SectionHero";
import AboutUs from "./components/AboutUs/AboutUs";
import CardAbout from "./components/CardAbout/CardAbout";
import SectionAbout from "./components/SectionAbout/SectionAbout";
import Appointment from "./components/Appointment/Appointment";
 "./components/SectionHero/SectionHero";

const App = () => {
  const logo = { img: "/assets/img/logo.png " };
  const items = [
    {
      id: "Home",
      name: "Home",
    },
    {
      id: "About",
      name: "About",
    },
    {
      id: "Services",
      name: "Services",
    },
    {
      id: "Departments",
      name: "Departments",
    },
    {
      id: "Doctors",
      name: "Doctors",
    },
    {
      id: "Dropdown",
      name: "Dropdown",
    },
    {
      id: "Contact",
      name: "Contact",
    },
  ];

  return (
    <>
      <NavBar logo={logo} items={items} btn="Make an Appointment" />
      <Hero />
      <HeroSection/>
      <SectionHero />
      <AboutUs />
      <CardAbout/>
      <SectionAbout/>
      <Services />
      <Appointment/>
      <Departments />
      <Testimonials />
      <Doctors />
      <Gallery />
      <Pricing />
      <Frequently />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
