import React from "react";
import "./style.css";
import adressIcon from "./images/address.png";
import phoneIcon from "./images/phone.png";
import emailIcon from "./images/email.png";

const AskUs = () => {
  return (
    <div className="ask-us">
      <div className="mainContainer">
        <div>
          <h2>Ask Us</h2>
          <hr />
        </div>

        <div>
          <img
          className="images"
          src={adressIcon} alt="Address Icon" />
          <h2 className="headings">Meet Us</h2>
          <p>
            Shahnaz Arcade, SA-47, 3rd Floor, Shaheed-e-Millat Rd, Delhi
            Mercantile Society Karachi Sindh 74800
          </p>
        </div>
        <div className="itemsContainer">
          <img
            className="images"
          src={phoneIcon} alt="Phone Icon" />
          <h2 className="headings">Call Us</h2>
          <p>+92 302 0272739</p>
        </div>
        <div>
          <img
          className="images"
          src={emailIcon} alt="Email Icon" />
          <h2 className="headings">Email Us</h2>
          <p>Info@lawtrack.pk</p>
        </div>
        <div className="btn-div">
          <button id="btn">BOOK ONLINE CONSULTATION</button>
        </div>
      </div>
    </div>
  );
};

export default AskUs;
