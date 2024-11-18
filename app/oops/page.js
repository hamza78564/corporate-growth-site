"use client";
import "../d.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header2 from "../Header2/page";
import Footer from "../Footer/page";
import Contact from "../Contact/page";
export default function Opps() {
  const [isClient, setIsClient] = useState(false); // حالة لتحديد إذا كان المكون في بيئة العميل

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="main">
      <Header2 />
      <div className="oops">
        <div className="box">
          <h1>There is maintenance on site, check back later.</h1>
          <Link href={"/"}>
            <h3 className="text-center">Back To Main Site</h3>
          </Link>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
