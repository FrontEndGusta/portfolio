import { keyframes, styled } from "styled-components";
const slideInFromRight = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;
export const ToastContainer = styled.div`
  .toast {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-height: 64px;
    width: 320px;
    gap: 8px;
    padding: 8px;
    border-radius: 4px;
    margin: 0 0 16px 0;
    padding: 10px;
    border: 10px;
    animation: ${slideInFromRight} 0.5s ease-in-out;
  }
  .toasts {
    position: fixed;
    left: 10px;
    bottom: 10px;
  }

  .icons svg{
    width: 20px;
    height: 20px;
  }

  .icons.error,
  .icons.success{
    margin: 0 0 0 3px;
  }

  .icons.error svg{
    color: #e74c3c;
  }

  .icons.success svg{
    color: #07bc0c;
  }

  .toast.error-toast,
  .toast.success-toast {
    background-color: ${props => props.theme.colors.toast};
    color: #757575;
    
  }
  .toast.success-toast{
    color: ${props => props.theme.colors.text_toast};
  }

  .close {
    position: absolute;
    right: 7px;
    top: 7px;
    color: #757575;
  }
  .close svg {
    color: #757575;
    height: 16px;
    width: 14px;
  }
`;
