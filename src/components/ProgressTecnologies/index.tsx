import React from "react";
import { ContainerProgressTecnologies } from "./styles";

interface Technology {
  name: string;
  width: number;
}

interface ProgressBarProps {
  tech: Technology[];
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ tech }) => {
  return (
    <ContainerProgressTecnologies>
      <h1 className="title-text">Progresso</h1>
      {tech.map((tech, index) => (
        <div key={index} className="skill-box">
          <span className="title">{tech.name}</span>
          <div className="skill-bar">
            <span
              className="skill-per html"
              style={{ width: `${tech.width}%` }}
            >
              <span className="tooltip">{tech.width}%</span>
            </span>
          </div>
        </div>
      ))}
    </ContainerProgressTecnologies>
  );
};

export default ProgressBar;
