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
  flex-direction: column;
  gap:15px
}

.tecnologies{
  width: 65%;
}

.tecnologies h2{
  font-size: 2.5em;
}

.tecnologies p{
  line-height: 25px;
  font-size: 1.2em;
  margin: 35px 0 35px;
}

.carrousel{
  width: 100%;
  padding: 0 50px 0 50px;
}
.containerCards{
    display: flex;
    align-items:center;
    justify-content: space-around;
    margin-top: 50px;
}

`