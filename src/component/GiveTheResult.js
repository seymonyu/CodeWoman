import React from "react";
import WinPopUp from "./WinPopUp";

function GiveTheResult({ flag, handlerunmount, mount }) {
  return (
    <div>
      {flag === 1 ? <WinPopUp handlerunmount={handlerunmount} /> : null}

      {flag === 2 ? <WinPopUp handlerunmount={handlerunmount} /> : null}
    </div>
  );
}

export default GiveTheResult;
