"use client";
import "../d.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { faBars, faUserPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
export default function Header2() {
  const navRef = useRef();
  function showBar() {
    navRef.current.classList.toggle("resNav");
  }
  let a = useRouter()
  function handleMainPage() {
    a.push('/')
  }
  return (
    <div className="header2">
      <div className="main-header">
        <h4 onClick={handleMainPage} style={{ cursor: 'pointer' }}>JAMES CONSULTING</h4>
      </div>

      <div className="content">
        <div className="bars">
          <button
            className="navBtn  naveOpen"
            onClick={showBar}
            style={{
              border: "none",
              background: "transparent",
              color: "white",
            }}
          >
            <FontAwesomeIcon icon={faBars} width={30} />
          </button>
        </div>
        <ul ref={navRef}>
          <button
            className="navBtn  naveClose"
            onClick={showBar}
            style={{
              border: "none",
              background: "transparent",
              color: "white",
            }}
          >
            <FontAwesomeIcon icon={faXmark} width={40} height={40} />
          </button>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects"> Projects</Link>
          </li>
          <li>
            <Link href="/services"> Services</Link>
          </li>
          <li>
            <Link href="/plans">Plans & Pricing</Link>
          </li>
          <li>
            <Link href="/tools"> Tools & Tips</Link>
          </li>
          <li>
            <Link href="/oops"> Contact</Link>
          </li>

          <li className="main-login">
            <Link href={"/oops"}>
              <FontAwesomeIcon icon={faUserPlus} />
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
