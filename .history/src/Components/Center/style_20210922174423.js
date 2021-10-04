import { Link } from "react-router-dom"
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
    margin: 0;
    text-align: center;
    width: 80%;
    height: 70%;
    font-size: 25px;

`
export const CenterInformation = styled.div`
    width: 100%;
    height: 70%;
`
export const CenterButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    font-size: 35px;
    background-color: transparent;
    color: #111222;
    border-radius: 5px;
    transition: color .4s linear,
    background-color .4s linear;
    &:hover{
        background-color: #111222;
        color: #fffff1; 
    }
`
export const CountBike = styled.div`
    width: 20%;
    height: 30px;
    display: flex;
`
export const PriceTitle = styled.span`
    font-weight: 700;
`
export const PriceComponents = styled.ul`
    margin: 0;
    display: flex;
    flex-direction: column;
`
export const PriceComponent = styled.li`
    margin: 2px 0px;
    width: 100%;
`