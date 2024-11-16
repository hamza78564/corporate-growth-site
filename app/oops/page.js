"use client";
import Image from "next/image";
import "../d.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faUserPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRef } from "react";
import Header from "../Header/page";
import Header2 from "../Header2/page";
import { Content } from "next/font/google";
import Footer from "../Footer/page";
import Contact from "../Contact/page";
export default function Opps() {
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
