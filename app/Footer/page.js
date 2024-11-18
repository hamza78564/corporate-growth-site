"use client";
import "../d.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className="footer">
      <div className="main-footer">
        <div className="footer-content">
          <h4>JAMES CONSULTING</h4>
          <div className="content1">
            <h6>
              500 Terry Francine Street, San Francisco, CA 94158 Mail:
              info@mysite.com <span>Tel: 123-456-7890</span>
            </h6>
          </div>
        </div>
        <div className="footer-content">
          <h4>MENU</h4>
          <div className="content2">
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="#"> Projects</Link>
              </li>
              <li>
                <Link href="#"> Services</Link>
              </li>
              <li>
                <Link href="#">Plans & Pricing</Link>
              </li>
              <li>
                <Link href="#"> Tools & Tips</Link>
              </li>
              <li>
                <Link href="#"> Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-content">
          <div className="font-we">
            <h4>SOCIALS</h4>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <div className="content3">
            <h6>
              © 2035 by JAMES CONSULTING. <br />
              Powered and secured by JAMES CONSULTING
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
