"use client";


import Header2 from "./Header2/page";
import MainContent from "./MainContent/page";
import Nav from "./Nav/page";
import AboutUs from "./AboutUs/page";
import OurClient from "./OurCleint/page";
import Testimonials from "./TESTIMONIALS/page";
import Contact from "./Contact/page";
import { useEffect, useState } from "react";
import Footer from "./Footer/page";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <Header2 />
      <MainContent />
      <Nav />
      <AboutUs />
      <OurClient />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
