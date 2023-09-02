import React, { useContext } from "react";
import {BiArrowToBottom} from 'react-icons/bi'
import { SessionOneContainer } from "./styles";
import TypeWriter from "../TypeWriter";
import image from "../../assets/avatar.jpeg";
export const SectionOne: React.FC = () => {
  return (
    <>
      <SessionOneContainer>
        <section className="banner">
          <div className="textBanner">
            <h2 className="teste">
              <TypeWriter />
            </h2>
            <h3>Desenvolvedor Front-End</h3>
            <div className="containerBtn">
            <button className="cv">Download CV <BiArrowToBottom /></button>
            <button className="contact">Contato</button>
            </div>
          </div>
          <img src={image} alt="Avatar" />
        </section>
        <section></section>
      </SessionOneContainer>
    </>
  );
};

export default SectionOne;
