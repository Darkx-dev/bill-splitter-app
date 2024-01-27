import TipButton from "./TipButton";

export default function TipPercentage() {
  const tips = [5, 10, 15, 25, 50];
  return (
    <div className="tip-percentage">
      <span>Select Tip %</span>
      <div className="grid grid-cols-3 gap-4">
        {tips.map((tip, index) => {
          return <TipButton key={index} tipValue={tip + "%"} />;
        })}
        <button className="custom-tip-percent shadow-md overflow-hidden">
            <input type="number" className="outline-none w-full h-full max-sm:text-xl" placeholder="Custom"  />
        </button>
      </div>
    </div>
  );
}
