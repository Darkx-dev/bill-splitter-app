import { useState } from "react";
import TipButton from "./TipButton";

export default function TipPercentage(params: any) {
  const tips = [5, 10, 15, 20, 25];
  return (
    <div className="tip-percentage">
      <span>Select Tip %</span>
      <div className="grid grid-cols-3 gap-4">
        {tips.map((tip, index) => {
          return (
            <TipButton
              key={index}
              tipValue={tip + "%"}
              activeState={tip}
              id={index.toString()}
              onClick={(e: any) => params.onClick(e)}
            />
          );
        })}
        <label className="custom-tip-percent shadow-md overflow-hidden">
          <input
            type="number"
            className="outline-none w-full h-full max-sm:text-xl"
            placeholder="Custom"
            onChange={params.customTip}
          />
        </label>
      </div>
    </div>
  );
}
