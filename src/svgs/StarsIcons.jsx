// StarIcons.jsx
import React from "react";

export const FullStar = ({
  size = 19,
  color = "currentColor",
  className = "",
}) => (
  <svg
    className={`inline-block ${className}`}
    stroke="currentColor"
    fill={color}
    strokeWidth="0"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export const HalfStar = ({
  size = 19,
  color = "currentColor",
  className = "",
}) => (
  <svg
    className={`inline-block ${className}`}
    stroke="currentColor"
    fill={color}
    strokeWidth="0"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 17.27L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export const EmptyStar = ({
  size = 19,
  color = "currentColor",
  className = "",
}) => (
  <svg
    className={`inline-block ${className}`}
    stroke={color}
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);
