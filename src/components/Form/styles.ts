import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    padding: 14px;
  }

  .container h2{
    color: ${(props) => props.theme.colors.secundary};
    margin: 30px 0 30px;
  }

  .title {
    margin-bottom: 14px;
    color: ${(props) => props.theme.colors.secundary};
  }

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .error {
    width: 60%;
    color: ${(props) => props.theme.colors.secundary};
    margin: 0px 0 10px;
    color: red;
  }

  .input {
    width: 60%;
    margin: 0px 0 10px;
    height: 34px;
    border-radius: 4px;
    padding: 0 8px;
    color: ${(props) => props.theme.colors.secundary};
    background-color: ${(props) => props.theme.colors.card};
    border: 2px solid ${(props) => props.theme.colors.secundary};
    box-shadow: 4px 4px ${(props) => props.theme.colors.secundary};
    outline: none;
  }

  .textarea {
    outline: none;
    width: 60%;
    margin-bottom: 14px;
    border-radius: 4px;
    padding: 8px;
    height: 94px;
    resize: none;
    color: ${(props) => props.theme.colors.secundary};
    background-color: ${(props) => props.theme.colors.card};
    border: 2px solid ${(props) => props.theme.colors.secundary};
    box-shadow: 4px 4px ${(props) => props.theme.colors.secundary};
  }

  .button {
    height: 34px;
    width: 50%;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color, transform 0.8s;
    color: ${(props) => props.theme.colors.secundary};
    background-color: ${(props) => props.theme.colors.card};
    border: 2px solid ${(props) => props.theme.colors.secundary};
    box-shadow: 4px 4px ${(props) => props.theme.colors.secundary};
  }

  .button:hover {
    color: ${(props) => props.theme.colors.secundary};
    transform: scale(1.01);
  }

  .button:active {
    transform: scale(.9);
    background-color: ${(props) => props.theme.colors.primary};
  }

  .iconsContact{
    margin: 30px 0 30px;
  }

  
  @media (width <= 720px) {
    .input, .error, .textarea{
      width: 90%
    }
  }
`;
