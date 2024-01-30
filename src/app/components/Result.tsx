import React from "react";
import { useState } from "react";

export default function Result(params: any) {
  const data: any = {
    bill: params.bill,
    tip: params.tip,
    heads: params.heads
  };

 
  return (
    <>
      <div className="flex justify-between items-center" id="result">
        <span>
          Tip Amount <br />
          <span className="text-xs">/ person</span>
        </span>
        <span id="answer1">{params.tipAmount}$</span>
      </div>
      <div className="flex justify-between items-center">
        <span>
          Total Amount <br />
          <span className="text-xs">/ person</span>
        </span>
        <span id="answer2">{params.actualAmount}$</span>
      </div>
      <div className="mt-5 flex flex-col gap-8">
        <button id="calc" onClick={params.calculate}>
          CALCULATE
        </button>
        <button id="reset" onClick={params.reset}>
          RESET
        </button>
      </div>
    </>
  );
}
