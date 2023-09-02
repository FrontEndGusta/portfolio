import React, { useContext } from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiMessageSquareError } from "react-icons/bi";
import { PopoversContainer } from "./styles";
import ione from "../../assets/popovers/1.jpg";
import itwo from "../../assets/popovers/2.jpg";
import itree from "../../assets/popovers/3.jpg";
import ifor from "../../assets/popovers/4.jpg";
import ifive from "../../assets/popovers/4.jpg";
import avatar from "../../assets/popovers/avatar.webp";


export const Popovers: React.FC = () => {

  return (
    <PopoversContainer >
      <nav className="nav">
        <div className="popover">
          <img src={avatar} alt="" />
          <div className="menu">
            <header>
              <img src={avatar} alt="" />
              <div>
                <h2>Gustavo Silva</h2>
                <h3>São Paulo, Cajamar</h3>
              </div>
            </header>
            <div className="images">
              <img src={ione} alt="" />
              <img src={itwo} alt="" />
              <img src={itree} alt="" />
              <img src={ifor} alt="" />
              <img src={ifive} alt="" />
            </div>
          </div>
        </div>
        <button className="btn-bubble" data-tooltip="chat_bubble">
          <BiMessageSquareDetail />
        </button>
        <button className="btn-favorite" data-tooltip="favorite">
          <BiHeart />
        </button>
        <button className="btn-info" data-tooltip="info">
          <BiMessageSquareError />
        </button>
      </nav>
    </PopoversContainer>
  );
};

export default Popovers;
