import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  width: 100%;
  position: fixed;
  z-index: 1;

  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    overflow-x: hidden;
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .menu.open {
    width: 100vw;
  }

  .hamburger {
    cursor: pointer;
    padding: 10px 15px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    transition: 0.3s;
    display: none;
    -webkit-tap-highlight-color: transparent;
  }

  .hamburger.active .bar:first-child {
    transform: rotate(47deg) translate(8px, 5px);
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:last-child {
    transform: rotate(-47deg) translate(8px, -5px);
  }

  .bar {
    width: 30px;
    height: 3px;
    background-color: ${(props) => props.theme.colors.secundary};
    margin: 6px 0;
    transition: 0.3s;
  }

  .menu-items {
    list-style: none;
    padding: 0;
    text-align: center;
    margin: 0;
  }

  .menu-items li {
    margin: 15px 0;
    font-size: 20px;
    color: ${(props) => props.theme.colors.secundary};
    cursor: pointer;
    transition: 0.2s;
    position: relative;
    cursor: pointer;
  }

  .portfolio p {
    color: ${(props) => props.theme.colors.secundary};
    font-size: 1.2em;
  }
  .switch {
    display: flex;
  }

  .switch ul {
    list-style: none;
    display: flex;
    gap: 15px;
    text-align: center;
    padding: 0 30px;
  }
  .switch ul li {
    text-decoration: none;
    color: ${(props) => props.theme.colors.secundary};
    font-size: 1.2em;
    position: relative;
    letter-spacing: 1.5px;
    cursor: pointer;
  }

  .menu-items li:after,
  li:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 3px;
    background: #fff;
    border-radius: 5px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.5s;
  }
  .menu-items li:hover:after,
  li:hover:after {
    transform-origin: left;
    transform: scaleX(1);
    background-color: ${(props) => props.theme.colors.secundary};
  }

  @media (width <= 620px) {
    justify-content: flex-end;
    .hamburger {
      display: inline-block;
    }
    .portfolio,
    .switch ul {
      display: none;
    }
  }
`;
