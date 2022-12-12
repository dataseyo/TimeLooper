import React from "react";

const cleanPercentage = (percentage: number) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

interface CircleType {
    colour: string,
    pct?: number
}

interface CircleSVGType {
    colour: string;
    percentage?: number;
    text: string;
}

type TextType = {
    text: string
}

const Circle = ({ colour, pct }: CircleType) => {
    console.log(pct)
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct!) * circ) / 100;
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={"1rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const Text = ({text}: TextType) => {
    return (
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize={"1.3em"}
      >
        {text}
      </text>
    );
  };

const CircleSVG = ({ percentage, colour, text }: CircleSVGType) => {
    const pct = cleanPercentage(percentage!);
    return (
        <svg width={200} height={200}>
        <g transform={`rotate(-90 ${"100 100"})`}>
            <Circle colour="lightgrey" />
            <Circle colour={colour} pct={pct} />
        </g>
            <Text text={text} />
        </svg>
    )
}

// const Text = ({ percentage }) => {
//   return (
//     <text
//       x="50%"
//       y="50%"
//       dominantBaseline="central"
//       textAnchor="middle"
//       fontSize={"1.5em"}
//     >
//       {percentage.toFixed(0)}%
//     </text>
//   );
// };

export default CircleSVG;
