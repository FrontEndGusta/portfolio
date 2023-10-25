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
.containerAbout{
  display:flex;
  align-items: center;
  gap:15px
}

.tecnologies{
  width: 65%;
}

.carrousel{
  width: 40%;
  padding-right: 40px;
}
.containerCards{
    display: flex;
    align-items:center;
    justify-content: space-around;
    margin-top: 50px;
}
`