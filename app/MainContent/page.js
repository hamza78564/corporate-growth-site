import Image from "next/image";
import "../d.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
export default function MainContent() {
  return (
    <div className="contenT">
      <div className="main">
        <Image
          src="/maxresdefault.jpg"
          alt="Image"
          fetchPriority="hight"
          layout="fill"
          quality={100}
          priority
        />
      </div>
      <div className="logo">
        <h4>Developing Innovative Strategies</h4>
        <h1>ACHIEVING GROWTH</h1>
        <Link href={"/oops"}>
          <button className="main-button">Free Consultation</button>
        </Link>{" "}
      </div>
    </div>
  );
}
