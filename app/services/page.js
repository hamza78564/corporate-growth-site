import Image from "next/image";
import "../d.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Header from "../Header/page";
import Header2 from "../Header2/page";
import Contact from "../Contact/page";
import Footer from "../Footer/page";
export default function Services() {
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
