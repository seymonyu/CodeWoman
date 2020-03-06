import React from "react";
import WinPopUp from "./WinPopUp";
import TryAgainPopUp from "./TryAgainPopUp";

function GiveTheResult({ flag, handlerunmount, mount }) {
  return (
    <div>
      {flag === 1 ? <WinPopUp handlerunmount={handlerunmount} /> : null}

      {flag === 2 ? <TryAgainPopUp handlerunmount={handlerunmount} /> : null}
    </div>
  );
}

export default GiveTheResult;
