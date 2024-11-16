"use client";
import Image from "next/image";
import "../d.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faUserPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRef } from "react";
export default function AboutUs() {
  return (
    <div className="about">
      <div className="about-Us">
        <div className="img"> </div>
        <div className="overlay"> </div>
        <div className="content-about">
          <h1>ABOUT US</h1>
          <div className="parg">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum. Curabitur non nulla nec erat
              vulputate auctor. Nulla facilisi. Donec sit amet sapien euismod,
              efficitur urna a, egestas erat. Integer hendrerit, velit id
              fermentum tincidunt, nulla nisi feugiat justo, ac dictum nisi erat
              at ante. In hac habitasse platea dictumst. Maecenas consectetur
              eros sed velit euismod, eu suscipit lacus vulputate. Nullam
              mollis, turpis vel aliquam pretium, libero tortor tincidunt justo,
              vel vulputate eros sem non ex.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum. Curabitur non nulla nec erat
              vulputate auctor. Nulla facilisi. Donec sit amet sapien euismod,
              efficitur urna a, egestas erat. Integer hendrerit, velit id
              fermentum tincidunt, nulla nisi feugiat justo, ac dictum nisi erat
              at ante. In hac habitasse platea dictumst. Maecenas consectetur
              eros sed velit euismod, eu suscipit lacus vulputate. Nullam
              mollis, turpis vel aliquam pretium, libero tortor tincidunt justo,
              vel vulputate eros sem non ex.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
