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
import Contact from "../Contact/page";
import Footer from "../Footer/page";

export default function Projects() {
  return (
    <div className="main-contentM">
      <Header2 />

      {/* ########################### */}
      {/* ########################### */}
      {/* ########################### */}
      <div className="ourProjetcts  ">
        <div className="main-head">
          <h4>PROJECTS</h4>
        </div>
        <div className="grid">
          <div className="main-son">
            <div className="son">
              <Image
                src={"/project.webp"}
                width={489}
                height={634}
                fetchPriority="high"
                quality={100}
                alt=""
              />
              <div className="m-cont">
                <h2>PROJECT 1</h2>
              </div>
              <div className="parg">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="son">
              <Image
                src={"/project1.webp"}
                width={489}
                height={634}
                fetchPriority="high"
                quality={100}
                alt=""
              />

              <div className="m-cont">
                <h2>PROJECT 2</h2>
              </div>
              <div className="parg">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <div className="main-son">
            <div className="son">
              <Image
                src={"/projetct2.webp"}
                width={489}
                height={634}
                fetchPriority="high"
                quality={100}
                alt=""
              />
              <div className="m-cont">
                <h2>PROJECT 3</h2>
              </div>
              <div className="parg">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="son">
              <Image
                src={"/project4.webp"}
                width={489}
                height={634}
                fetchPriority="high"
                quality={100}
                alt=""
              />
              <div className="m-cont">
                <h2>PROJECT 4 </h2>
              </div>
              <div className="parg">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link href={"/oops"}>
          <button className="main-button">Free Consultation</button>
        </Link>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
