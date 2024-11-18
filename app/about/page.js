"use client";
import Image from "next/image";
import "../d.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header2 from "../Header2/page";
import Contact from "../Contact/page";
import Footer from "../Footer/page";

export default function About() {
  const [isClient, setIsClient] = useState(false); // حالة لتحديد إذا كان المكون في بيئة العميل

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="main-contentM">
      <div className="about1">
        <Header2 />
        <h1 className="text-center mt-5 d">About</h1>
        <div className="contentAB">
          <div className="pargh">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
          <div className="img">
            <Image
              src={"/2.webp"}
              width={489}
              height={634}
              fetchPriority="high"
              quality={100}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* ########################### */}
      {/* ########################### */}
      {/* ########################### */}
      <div className="ourTeam">
        <div className="main-head">
          <h4>OUR TEAM</h4>
          <p>Im a paragraph. lorem legendery tom watrson</p>
        </div>
        <div className="grid">
          <div className="main-son">
            <div className="son">
              <Image
                src={"/domin.webp"}
                width={489}
                height={634}
                fetchPriority="high"
                quality={100}
                alt=""
              />
              <div className="m-cont">
                <h2>DOMINICK JAMES</h2>
                <h3>Founder and Principal</h3>
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
                src={"/grace.webp"}
                width={489}
                height={634}
                fetchPriority="high"
                quality={100}
                alt=""
              />

              <div className="m-cont">
                <h2>GRACE RIOS</h2>
                <h3>Project Manager</h3>
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
                src={"/kim.webp"}
                width={489}
                height={634}
                fetchPriority="high"
                quality={100}
                alt=""
              />
              <div className="m-cont">
                <h2>KIM BAILEY</h2>
                <h3>VP Marketing</h3>
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
                src={"/traver.webp"}
                width={489}
                height={634}
                fetchPriority="high"
                quality={100}
                alt=""
              />
              <div className="m-cont">
                <h2>TREVOR SINCLAIR</h2>
                <h3>VP Accounts</h3>
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
