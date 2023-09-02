import styled from "styled-components";

export const PopoversContainer = styled.div`
:root {
  --popover-height: 36px;
}
.nav {
  position: fixed;
  top: 50%;
  right: -10px;
  translate: 0 -50%;
  display: grid;
  place-items: center;
  gap: 8px;
  padding: 20px;
  cursor: pointer;
}

.nav .btn-bubble,
.nav .btn-favorite,
.nav .btn-info{
  position: relative;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  border: 1px solid #e7e7e9;
  background: ${(props) => props.theme.colors.background};
  font-family: inherit;
  padding:0;
  cursor: inherit;
}

.nav .btn-bubble::before,
.nav .btn-favorite::before,
.nav .btn-info::before {
  content: attr(data-tooltip);
  position: absolute;
  top: 50%;
  right: 42px;
  translate: 6px -50%;
  opacity: 0;
  visibility: hidden;
  background: ${props => props.theme.colors.background_popover};
  color: ${props => props.theme.colors.text_popover};
  padding: 3px 6px;
  font-size: 12px;
  border-radius: 4px;
  transition: 0.3s;
}

.nav .btn-bubble:hover::before,
.nav .btn-favorite:hover::before,
.nav .btn-info:hover::before {
  opacity: 1;
  visibility: visible;
  translate: 0 -50%;
}

.material-symbols-outlined {
  font-size: 18px;
}

.popover {
  position: relative;
  height: 36px;
  width: 60px;
  text-align: center;
}

.popover > img {
  width: 36px;
  height: px;
  border-radius: 50%;
  transition: 0.3s;
}

.menu {
  position: absolute;
  top: 0;
  right: 64px;
  width: 260px;
  padding: 16px;
  translate: 8px 0;
  opacity: 0;
  visibility: hidden;
  border-radius: 6px;
  background: #ffffff;
  box-shadow: 0 6px 50px rgb(0 0 0 / 16%);
  transition: 0.3s;
}

.menu::after {
  content: "";
  position: absolute;
  top: 16px;
  right: -5px;
  width: 10px;
  height: 10px;
  rotate: 45deg;
  color: ${props => props.theme.colors.text}
}

.popover:hover .menu {
  opacity: 1;
  visibility: visible;
  translate: 0;
}

.popover:hover > img {
  opacity: 0.65;
}

.menu header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

h2,
h3 {
  margin: 0;
  font-weight: 400;
  text-align: left;
}

.menu h2 {
  margin: 0;
  font-size: 14px;
}

.menu h3 {
  margin: 0;
  font-size: 11px;
  opacity: 0.5;
}

.menu header img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.images {
  display: flex;
  gap: 10px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
  margin-top: 10px; /* Add margin to the top */
  scrollbar-color: black; /* Adjust colors */
}


.images::-webkit-scrollbar {
  width: 3px; /* Set the width of the scrollbar */
  height: 7px;
  margin-top: 10px;
}

.images::-webkit-scrollbar-thumb {
  background-color: #9fa4a9; /* Color of the thumb */
  border-radius: 3px; /* Rounded corners for the thumb */
}

.images::-webkit-scrollbar-track {
  background-color: #dee7e7; /* Color of the track */
  border-radius: 3px;
}

.images img {
  scroll-snap-align: start;
  width: 108px;
  min-width: 108px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
}
`