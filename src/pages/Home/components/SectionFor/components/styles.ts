import styled from "styled-components";

export const ContactContainer = styled.div`
display: flex;
gap: 15px;
.btn {
  background: ${props => props.theme.colors.secundary};
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0);
  cursor: pointer;
  transition: transform 0.5s;
}

.btn:hover {
  box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
	      inset -4px -4px 6px -1px rgba(255,255,255,0.7),
	      -0.5px -0.5px 0px rgba(255,255,255,1),
	      0.5px 0.5px 0px rgba(0,0,0,0.15),
	      0px 12px 10px -10px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.1);
  transform: translateY(0.5em);
}
.btn:active{
  
}

.icon svg{
  width: 30px;
  height: 30px;
}`
