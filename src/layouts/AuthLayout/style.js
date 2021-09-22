import styled from "styled-components";
import AuthBack from "../../assets/images/AuthBack.jpg"

export const AppImage = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width:100%;
  height:100%;
  background-image: url(${AuthBack});
  background-size: cover;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
`

export const AbsoluteBackground = styled.div`
  width:100%;
  height: 100%;
  position: absolute;
  background-color: #000;
  opacity: 0.7;
  z-index: 1;
`

export const AppWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

export const AppContent = styled.div`
  width: 400px;
  height: auto;
  background-color: #000000bf;
  border-radius: 10px;
  box-shadow: 0px 0px 20px -6px #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`
