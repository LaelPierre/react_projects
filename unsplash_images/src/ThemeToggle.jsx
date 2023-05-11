import React from "react";
import { useGlobalContext } from "./context";

const ThemeToggle = () => {
  const { greeting } = useGlobalContext();

  return <h2>ThemeToggle</h2>;
};

export default ThemeToggle;
