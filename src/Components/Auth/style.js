import styled from "styled-components";

export const AuthWindow = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px -6px #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleStyle = styled.h1`
  width: 100%;
  padding: 0px 0px 0px 25px;
  font-size: 27px;
  color: #d2d2d2;
  font-family: "Merriweather", serif;
`;
export const InputImage = styled.div`
  width: 30px;
  height: 30px;
  background-color: white;
`;
export const ErrorMessage = styled.div`
  color:red;
  font-size: 18px;
  text-align: center;
  padding: 20px 0px 0px 0px;
`