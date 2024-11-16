import Image from "next/image";
import "../d.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
export default function Nav() {
  return (
    <div className="nav">
      <div className="row ">
        <div className="col-lg-4 col-md-6 col-sm-12 ">
          <h1>SERVICES</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <Link href={"/services"}>
            {" "}
            <button> More Info </button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h1>PROJECTS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>

          <Link href={"/projects"}>
            {" "}
            <button> More Info </button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <h1>CLIENTS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
          <Link href={"#client"}>
            {" "}
            <button> More Info </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
