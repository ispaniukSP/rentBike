import styled from "styled-components"

export const StyledCenter = styled.div`
    width: 100%;
    min-height: 80vh;
    background-color: #fffff3;
    font-size: 25px;
`
export const StyledWrapper = styled.div`
    width: 100%;
    padding-top: 60px;
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
export const CenterTitle = styled.h1`
    width: 100%;
    padding: 0;
    margin: 20px 0 0 0;
    font-size: 40px;
    text-align:center;
`
export const CenterText = styled.p`
    width: 80%;
    height: 80%;
    font-size: 25px;

`
export const CenterInformation = styled.div`
    width: 100%;
    height: 70%;
`
export const CenterButton = styled.button`
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 30px;
    font-size: 35px;
`