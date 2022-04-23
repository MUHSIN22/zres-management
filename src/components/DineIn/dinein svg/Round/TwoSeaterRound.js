import React from "react";

function TwoSeater({availability}) {
  console.log(availability,"-> availbty"); 
  return (
    <svg
    className={availability+" svgDinein"}
      xmlns="http://www.w3.org/2000/svg"
      width="99.291"
      height="90"
      viewBox="0 0 99.291 90"
    >
      <g
        id="Group_2139"
        data-name="Group 2139"
        transform="translate(12527 -3153)"
      >
        <g
          id="Rectangle_867"
          data-name="Rectangle 867"
          transform="translate(-12511 3153)"
          // fill="#fff"
          // stroke="#040153"
          stroke-width="5"
        >
          <rect width="44" height="30" rx="8" stroke="none" />
          <rect x="2.5" y="2.5" width="39" height="25" rx="5.5" fill="none" />
        </g>
        <g
          id="Rectangle_868"
          data-name="Rectangle 868"
          transform="translate(-12457.247 3229.632) rotate(-90)"
          // fill="#fff"
          // stroke="#040153"
          stroke-width="5"
        >
          <rect width="43.885" height="29.538" rx="8" stroke="none" />
          <rect
            x="2.5"
            y="2.5"
            width="38.885"
            height="24.538"
            rx="5.5"
            fill="none"
          />
        </g>
        <g
          id="Rectangle_869"
          data-name="Rectangle 869"
          transform="translate(-12509 3153)"
          // fill="#fff"
          // stroke="#040153"
          stroke-width="5"
        >
          <rect width="39" height="9" rx="4.5" stroke="none" />
          <rect x="2.5" y="2.5" width="34" height="4" rx="2" fill="none" />
        </g>
        <g
          id="Rectangle_870"
          data-name="Rectangle 870"
          transform="translate(-12436 3227) rotate(-90)"
          // fill="#fff"
          // stroke="#040153"
          stroke-width="5"
        >
          <rect width="39" height="8" rx="4" stroke="none" />
          <rect x="2.5" y="2.5" width="34" height="3" rx="1.5" fill="none" />
        </g>
        <g
          id="Rectangle_866"
          data-name="Rectangle 866"
          transform="translate(-12527 3175)"
          // fill="#fff"
          // stroke="#040153"
          stroke-width="5"
        >
          <rect width="76" height="68" stroke="none" />
          <rect x="2.5" y="2.5" width="71" height="63" fill="none" />
        </g>
      </g>
    </svg>
  );
}

export default TwoSeater;
