import React from "react";
import { SVGProps } from "@/interfaces/svg";

function CodeBlue(props: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox={`0 0 ${props.width} ${props.height}`}
    >
      <path
        stroke="#8B5CF6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6.778 8.519L3 12.297l3.778 3.779M17.222 8.519L21 12.297l-3.778 3.779M9.271 18.595L14.73 6"
      ></path>
    </svg>
  );
}

export default CodeBlue;
