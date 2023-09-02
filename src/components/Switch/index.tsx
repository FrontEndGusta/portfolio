import React, { useContext, useState } from "react";
import { ThemeSwitchContainer } from "./styles";
import { ThemeContext } from "styled-components";

interface ThemeSwitchProps {
  toggleTheme(): void;
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ toggleTheme }) => {
  const isChecked = false;
  const { title } = useContext(ThemeContext);

  return (
    <ThemeSwitchContainer>
      <label className={`theme-switch ${isChecked ? "night" : "light"}`}>
        <input
          type="checkbox"
          className="theme-switch__checkbox"
          onChange={toggleTheme}
          checked={title === "dark"}
        />
        <div className="theme-switch__container">
          <div className="theme-switch__clouds"></div>
          <div className="theme-switch__stars-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 144 55"
              fill="none"
            >
            </svg>
          </div>
          <div className="theme-switch__circle-container">
            <div className="theme-switch__sun-moon-container">
              <div className="theme-switch__moon">
                <div className="theme-switch__spot"></div>
                <div className="theme-switch__spot"></div>
                <div className="theme-switch__spot"></div>
              </div>
            </div>
          </div>
        </div>
      </label>
    </ThemeSwitchContainer>
  );
};

export default ThemeSwitch;
