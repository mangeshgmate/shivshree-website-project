import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

// Standard Component Imports
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Services from "./components/Services";
// import InquiryForm from "./components/InquiryForm";
// import Footer from "./components/Footer";
// import Founder from "./components/Founder";
// import STPNeed from "./components/STPNeed";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import InquiryForm from "./components/InquiryForm.jsx";
import Footer from "./components/Footer.jsx";
import Founder from "./components/Founder.jsx";
import STPNeed from "./components/STPNeed.jsx";
function App() {
  return (
    <HelmetProvider>
      {/* The main wrapper uses Tailwind's 'antialiased' for an HD, custom feel */}
      <div className="min-h-screen bg-white font-sans antialiased text-[#030F27]">
        <Helmet>
          <title>
            Shivshree Environment & Agriculture | WTP, STP, ETP Pune
          </title>
          <meta
            name="description"
            content="21 years of experience in Water Treatment Plants and Environmental Audits in Pimple Gurav, Pune."
          />
        </Helmet>

        <Navbar />

        <main>
          {/* We removed the 'pt-20' padding and moved it into components 
              for a more seamless, custom-built transition between sections */}
          <div className="pt-28">
            <Home />
            <About />
            <Founder />
            <STPNeed />
            <Services />
            <InquiryForm />
          </div>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
