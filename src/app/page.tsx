/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Input from "./components/Input";
import TipPercentage from "./components/TipPercentage";
import Result from "./components/Result";
export default function Home() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [heads, setHeads] = useState(1);
  const [totalTip, setTotalTip] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const handleTip = (e: any) => {
    let currentTip = e.target.textContent.slice(0, -1);
    setTip(currentTip);
  };
  const handleBill = (e: any) => {
    let billValue = e.target.value;
    setBill(billValue);
  };
  const handleHeads = (e: any) => {
    let headsNumber = e.target.value;
    setHeads(headsNumber);
  };
  const handleCalculation = () => {
    let tipAmount = Math.floor((bill * (tip / 100)) / heads);
    setTotalTip(tipAmount);
    let actualAmount = Math.floor(bill / heads);
    setTotalAmount(actualAmount);
  };
  const handleReset = () => {
    setTotalTip(0);
    setTotalAmount(0);
  };
  const handleCustomTip = (e: any) => {
    setTip(e.target.value);
  };

  return (
    <main
      className="flex justify-center items-center flex-col gap-10 h-screen"
      id="main"
    >
      <img className="max-sm:hidden" src="/logo.svg" alt="Logo.svg" />
      <div className="container grid grid-cols-2 max-sm:h-full max-sm:grid-cols-1 xl:w-2/3 lg:w-2/3 gap-8 bg-white max-sm:rounded-none max-sm:p-5 py-8 px-10 rounded-3xl shadow-2xl ">
        <div className="flex flex-col gap-8">
          <div className="form">
            <label htmlFor="bill">Bill</label>
            <Input
              src="/icon-dollar.svg"
              onChange={(e: any) => handleBill(e)}
            />
          </div>
          <TipPercentage
            onClick={(e: any) => handleTip(e)}
            customTip={handleCustomTip}
          />
          <div className="form-two">
            <label htmlFor="people">Number of People</label>
            <Input
              src="/icon-person.svg"
              onChange={(e: any) => handleHeads(e)}
            />
          </div>
        </div>
        <div className="result p-7 pt-10 md:p-10">
          <Result
            bill={bill}
            tip={tip}
            heads={heads}
            calculate={handleCalculation}
            tipAmount={totalTip}
            actualAmount={totalAmount}
            reset={handleReset}
          />
        </div>
      </div>
    </main>
  );
}
