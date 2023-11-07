import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  width: 100%;

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
    padding: 15px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    transition: 0.3s;
    display: none;
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
    padding: 0 15px;
  }
  .switch ul li a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.secundary};
    font-size: 1.2em;
    position: relative;
    letter-spacing: 0.15em;
  }
  .menu-items li:after,
  a:after {
    bottom: -5px;
    content: "";
    display: block;
    height: 4px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  .menu-items li:hover:after,
  a:hover:after {
    width: 100%;
    left: 0;
    background-color: ${(props) => props.theme.colors.secundary};
  }

  @media (width <= 620px) {
    justify-content: flex-end;
    .hamburger{
      display:inline-block;
    }
    .portfolio,
    .switch ul
    {
      display: none;
    }
  }
`;
