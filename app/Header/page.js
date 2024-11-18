"use client"
import "../d.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
export default function Header() {
  return (
    <div className="header">
      <div className="photo">
        <h1>
          <Link href="/">Mix</Link>
        </h1>
      </div>
      <div className="content-header">
        <p>
          Click Buy and create your own amazing clothes by JAMES CONSULTING{" "}
        </p>
        <span>Read More</span>
        <Link href={"/oops"}>
          <button className="btn btn-primary">Login & Enjoy </button>
        </Link>{" "}
      </div>
    </div>
  );
}
