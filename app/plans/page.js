'use client'
import Image from "next/image";
import "../d.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Header from "../Header/page";
import Header2 from "../Header2/page";
import Contact from "../Contact/page";
import Footer from "../Footer/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
export default function Plans() {
  let a = useRouter()
  function oops() {
    a.push('/oops')
  }
  return (
    <div className="plans">
      <Header2 />
      <div className="mainPlans">
        <div className="content-plans">
          <h1>GROWTH AND INNOVATION PLANS</h1>
          <p>
            We help businesses improve their performance through innovation in
            products, clothes, and strategy.
          </p>
        </div>
        <div className="grid-plans">
          <div className="son-grid">
            <h3>Management 101</h3>
            <div className="salary">
              <span>$</span>
              <h1>50</h1>
            </div>
            <div className="content-salary">
              <p>Actualize your business model and boost your KPIs</p>
            </div>
            <div className="validity">
              <span>Valid for 3 months</span>
            </div>
            <div className="submit">
              <button className="main-button" onClick={oops}>Select</button>
            </div>
            <div className="features">
              <div className="featuresUl">
                <ul>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="me-2" />1 Goal
                    setting consultation
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="me-2" />3
                    Individual sessions
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="me-2" />
                    Online resources
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="son-grid">
            <h3>Financial Strategy</h3>
            <div className="salary">
              <span>$</span>
              <h1>100</h1>
            </div>
            <div className="content-salary">
              <p>Add Clothes and maximize your competitive advantage</p>
            </div>
            <div className="validity">
              <span>Valid for 6 months</span>
            </div>
            <div className="submit">
              <button className="main-button" onClick={oops}>Select</button>
            </div>
            <div className="features">
              <div className="featuresUl">
                <ul>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="me-2" />1 Monthly
                    goal setting meeting
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="me-2" />
                    Unlimited individual sessions
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="me-2" />
                    Online resources
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="me-2" />
                    Phone support
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="me-2" />
                    Weekly newsletter
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="son-grid">
            <h3>Data and Digital Sol</h3>
            <div className="salary">
              <span>$</span>
              <h1>70</h1>
            </div>
            <div className="content-salary">
              <p>Harness the power of technology to upgrade your business</p>
            </div>
            <div className="validity">
              <span>Valid for 12 months</span>
            </div>
            <div className="submit">
              <button className="main-button" onClick={oops}>Select</button>
            </div>
            <div className="features">
              <div className="featuresUl">
                <ul>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="me-2" />1 Monthly
                    goal setting meeting
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="me-2" />4
                    Individual sessions
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="me-2" />
                    Online resources
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="me-2" />1 Guest
                    pass
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="me-2" />
                    Phone support
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="me-2" />
                    Weekly newsletter
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faCheck} className="me-2" />
                    Priority support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
