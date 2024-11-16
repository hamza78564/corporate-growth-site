"use client";
import Image from "next/image";
import styles from "./page.module.css";

import Header from "./Header/page";
import Header2 from "./Header2/page";
import MainContent from "./MainContent/page";
import Nav from "./Nav/page";
import AboutUs from "./AboutUs/page";
import OurClient from "./OurCleint/page";
import Testimonials from "./TESTIMONIALS/page";
import Contact from "./Contact/page";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import Footer from "./Footer/page";

export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.open("https://example.com", "_blank");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
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
