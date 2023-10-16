import styled from "styled-components";

export const SessionTwoContainer = styled.div`
.about{
    height: 100vh;
    text-align:center;
}
.about h2{
  margin-top: 50px;
  color: ${props => props.theme.colors.primary};
}
.containerCards{
    display: flex;
    align-items:center;
    justify-content: space-around;
    margin-top: 50px;
}
`