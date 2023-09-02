import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  h2{
    color: ${props => props.theme.colors.secundary};
  }
  .header{
    display: flex;
    flex-direction: row;
  }
`;
