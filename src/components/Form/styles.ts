import { styled } from "styled-components";

export const Container = styled.div`
width: 100%;
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #FFF;
  padding: 14px;
}

.title{
  margin-bottom: 14px;
}

.form{
  
  width: 100%;
  display: flex;
  flex-direction: column;
}

.input{
  margin-bottom: 14px;
  height: 34px;
  border-radius: 4px;
  border: 0;
  padding: 0 8px;
}

.textarea{
  margin-bottom: 14px;
  border-radius: 4px;
  border: 0;
  padding: 8px;
  height: 94px;
  resize: none;
}

.button{
  height: 34px;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  background-color: #0fdbff;
  font-size: 18px;
  transition: background-color, transform 0.8s;
}

.button:hover{
  background-color: #0fe3ff;
  transform: scale(1.01);
}`