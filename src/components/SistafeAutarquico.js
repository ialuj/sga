import React from "react";

import SISTAFE_AUTARQUICO from "./images/sistafe_autarquico.png";

import "./css/Logo.css";

function SistafeAutarquico({ description }) {
  return (
    <div className="sistafe-logo">
      <a
        href="https://www.sistafe.gov.mz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={SISTAFE_AUTARQUICO}
          alt={description}
          className="sistafe-logo div"
        />
      </a>
    </div>
  );
}

export default SistafeAutarquico;
