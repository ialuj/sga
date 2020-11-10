import React from "react";

import SISTAFE from "./images/sisfate.png";

import "./css/Logo.css";

function Sistafe({ description }) {
  return (
    <div className="sistafe-logo">
      <a
        href="https://www.sistafe.gov.mz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={SISTAFE} alt={description} className="sistafe-logo div" />
      </a>
    </div>
  );
}

export default Sistafe;
