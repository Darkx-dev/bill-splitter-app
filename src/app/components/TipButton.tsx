import React from "react";

function TipButton(params: any) {
  return (
    <>
      <input className="hidden" type="radio" name="tip" id={params.id} />
      <label
        htmlFor={params.id}
        className="tip-percent text-center cursor-pointer"
        onClick={params.onClick}
        id="tip-btn"
      >
        {params.tipValue}
      </label>
    </>
  );
}

export default TipButton;
