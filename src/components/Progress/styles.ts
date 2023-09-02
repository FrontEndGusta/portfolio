import styled from "styled-components";

export const ProgressContainer = styled.div`
progress {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  border: none;
  background: transparent;
}

progress::-webkit-progress-bar {
  background: ${props => props.theme.colors.primary};
}

progress::-webkit-progress-value {
  background-color: #8f44fd;
}

nav h1 {
  font-weight: 500;
  font-size: 18px;
}
`