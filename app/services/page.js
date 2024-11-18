"use client";

import "../d.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header2 from "../Header2/page";
import Contact from "../Contact/page";
import Footer from "../Footer/page";
import { useEffect, useState } from "react";
export default function Services() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="services">
      <Header2 />
      <h1 className="headCont">SERVICES</h1>
      <div className="container1">
        <div className="box">
          <h1>Nothing Here right now. Check back soon.</h1>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
