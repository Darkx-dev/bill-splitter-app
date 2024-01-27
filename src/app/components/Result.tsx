import React from "react";

export default function Result() {
  return (
    <>
      <div className="flex justify-between items-center" id="result">
        <span>
          Tip Amount <br />
          <span className="text-xs">/ person</span>
        </span>
        <span id="answer1">0$</span>
      </div>
      <div className="flex justify-between items-center">
        <span>
          Total Amount <br />
          <span className="text-xs">/ person</span>
        </span>
        <span id="answer2">0$</span>
      </div>
      <div className="mt-5 flex flex-col gap-8">
        <button id="calc">CALCULATE</button>
        <button id="reset">RESET</button>
      </div>
    </>
  );
}
