/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { MouseEvent } from "react";

export default function Input(params: any) {
  return (
    <div className="relative">
      <img src={params.src} alt="" className="icon" />
      <input
        type="number"
        id="bill"
        className="shadow-md"
      />
    </div>
  );
}
