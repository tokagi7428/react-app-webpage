import React from "react";
import "./CallToAction.css";
import { FiCode } from "react-icons/fi";

function CallToAction() {
  return (
    <div className="cta-bg">
      <div className="overlay"></div>
      <div className="container">
        <div className="cta-text">
          <FiCode className="ficode" />
          <h2>We're react dev team</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            molestias eaque accusamus maiores vel odit officia perferendis
            perspiciatis voluptatum, sequi, id accusantium pariatur recusandae
            magni corporis atque provident. Natus, libero!
          </p>
          <a href="#" className="cta-btn">
            get to know us
          </a>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
