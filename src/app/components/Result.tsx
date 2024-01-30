import React from "react";
import { useState } from "react";

export default function Result(params: any) {
  const data: any = {
    bill: params.bill,
    tip: params.tip,
    heads: params.heads
  };
  const [totalTip, setTotalTip] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const handleCalculation = () => {
    let tipAmount = Math.floor((params.bill * (params.tip / 100)) / params.heads);
    setTotalTip(tipAmount);
    let actualAmount = Math.floor(params.bill / params.heads);
    setTotalAmount(actualAmount);
  };
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
        <button id="calc" onClick={handleCalculation}>
          CALCULATE
        </button>
        <button id="reset" onClick={params.reset}>
          RESET
        </button>
      </div>
    </>
  );
}
