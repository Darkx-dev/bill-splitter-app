import React from "react";
import { useState } from "react";

export default function Result(params: any) {
  const [totalTip, setTotalTip] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const handleCalculation = () => {
    console.log("handleCalculation")
  }
  const handleReset = () => {
    console.log("handleReset")
  }
  return (
    <>
      <div className="flex justify-between items-center" id="result">
        <span>
          Tip Amount <br />
          <span className="text-xs">/ person</span>
        </span>
        <span id="answer1">{totalTip}$</span>
      </div>
      <div className="flex justify-between items-center">
        <span>
          Total Amount <br />
          <span className="text-xs">/ person</span>
        </span>
        <span id="answer2">{totalAmount}$</span>
      </div>
      <div className="mt-5 flex flex-col gap-8">
        <button id="calc" onClick={handleCalculation}>CALCULATE</button>
        <button id="reset" onClick={handleReset}>RESET</button>
      </div>
    </>
  );
}
