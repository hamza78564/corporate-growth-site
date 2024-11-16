"use client";
import Image from "next/image";
import "../d.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeft,
  faArrowRight,
  faBars,
  faUserPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRef, useState } from "react";
export default function Testimonials() {
  const [testimonial, settestimonial] = useState([
    { name: "Dora Bridges", work: "Project Manager" },
    { name: "Sima Patel", work: "Operations Manager" },
    { name: "Brad Stevens", work: "Marketing Director" },
  ]);
  let [count, setCount] = useState(0);
  function handleArrowClick(dir) {
    setCount((prevIndex) => {
      let newIndex = prevIndex;
      if (dir === "left") {
        newIndex = prevIndex === 0 ? testimonial.length - 1 : prevIndex - 1;
      } else if (dir === "right") {
        newIndex = prevIndex === testimonial.length - 1 ? 0 : prevIndex + 1;
      }
      console.log(newIndex);
      return newIndex;
    });
  }

  return (
    <div className="testimonials">
      <div className="testimonials-Content">
        <h1>TESTIMONIALS</h1>
        <p>
          “Im a testimonial. Click to switsh me that says something nice about
          you .”
        </p>
      </div>
      <div className="switsh">
        <div className="switch-arorw">
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => handleArrowClick("left")}
          />
          <FontAwesomeIcon
            icon={faArrowRight}
            onClick={() => handleArrowClick("right")}
          />
        </div>
        <div className="cont">
          <h4>{testimonial[count].work}</h4>
          <span>{testimonial[count].name}</span>
        </div>
      </div>
      <div className="circles">
        <FontAwesomeIcon
          icon={faCircle}
          className={count === 0 ? "active" : ""}
        />
        <FontAwesomeIcon
          icon={faCircle}
          className={count === 1 ? "active" : ""}
        />
        <FontAwesomeIcon
          icon={faCircle}
          className={count === 2 ? "active" : ""}
        />
      </div>
    </div>
  );
}
