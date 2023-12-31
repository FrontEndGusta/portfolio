import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
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
    color: #090C08;
    background-color: #FFFFFF;
    border: 2px solid #090C08;
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
    color: #090C08;
    background-color: #FFFFFF;
    border: 2px solid #090C08;
    box-shadow: 4px 4px ${(props) => props.theme.colors.secundary};
  }

  .button {
    height: 34px;
    width: 50%;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    color: #090C08;
    background-color: #FFFFFF;
    border: 2px solid #090C08;
    box-shadow: 4px 4px ${(props) => props.theme.colors.secundary};
  }

  .button:active {
    box-shadow: 0px 0px #FFFFFF;
    transform: translate(3px, 3px);
    background-color: #FFFFFF;
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
