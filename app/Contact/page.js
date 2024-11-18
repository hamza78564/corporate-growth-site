"use client";
import "../d.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect, useState } from "react";




import Message from "../message/page";
export default function Contact() {
  const [inpVal, setInpVal] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showMessage, setShowMessage] = useState(false);
  const [finalMessage, setFinalMessage] = useState(false);
  const [classes, setClasses] = useState("form-group");
  const [isClient, setIsClient] = useState(false); // حالة لتحديد إذا كان المكون في بيئة العميل

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  function validataForm() {
    const { firstName, lastName, email, subject, message } = inpVal;
    if (
      [firstName, lastName, email, subject, message].some(
        (field) => field.trim() === ""
      )
    ) {
      setFinalMessage("Please fill in all fields");
      setClasses("form-group  finalMessageFalse");
      return false;
    }
    setFinalMessage("");
    setClasses("form-group finalMessageTrue ");
    return true;
  }

  function handleCheck(ev) {
    ev.preventDefault();
    if (validataForm()) {
      setShowMessage(true);
    }
  }
  function handleCompletion() {
    setFinalMessage("Success");
    setTimeout(() => {
      setFinalMessage("");
      setShowMessage(false);
    }, 1400);
  }

  return (
    <div>
      <div className="contact" id="Contact">
        <form className="form" onSubmit={handleCheck}>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input
              value={inpVal.firstName}
              onChange={(ev) => {
                setInpVal({ ...inpVal, firstName: ev.target.value });
              }}
              id="first-name"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input
              id="last-name"
              type="text"
              value={inpVal.lastName}
              onChange={(ev) => {
                setInpVal({ ...inpVal, lastName: ev.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={inpVal.email}
              onChange={(ev) => {
                setInpVal({ ...inpVal, email: ev.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              id="subject"
              type="text"
              value={inpVal.subject}
              onChange={(ev) => {
                setInpVal({ ...inpVal, subject: ev.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <input
              id="message"
              type="text"
              value={inpVal.message}
              onChange={(ev) => {
                setInpVal({ ...inpVal, message: ev.target.value });
              }}
            />
          </div>
          <div className={classes}>{finalMessage}</div>

          <button className="all">Submit</button>
        </form>

        <div className="map">
        </div>
      </div>
      {showMessage && <Message onComplate={handleCompletion} />}
    </div>
  );
}
