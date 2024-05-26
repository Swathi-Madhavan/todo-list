import React from "react";
import { createSvgIcon } from "@mui/material";

const AddRoundLight = createSvgIcon(
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.5 6.25L12.5 18.75" stroke="#2564CF" strokeLinecap="round" />
    <path d="M18.75 12.5L6.25 12.5" stroke="#2564CF" strokeLinecap="round" />
  </svg>,
  "StarLight"
);

export default AddRoundLight;
