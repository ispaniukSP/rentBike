import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ImageGenerator from './ImageGenerator'

export const StyledCity = styled.div`
    width: 100%;
    min-height: 80vh;
    background-color: #fffff3;
    font-size: 25px;
`
export const CityPointWrapper = styled.div`
    width: 100%;
    min-height: 70vh;
    padding-top: 60px;
`
export const CityBlock = styled.button`
    border: none;
    outline: none;
    padding: 0;
    font-size: 25px;
    width: 350px;
    height: 275px;
    border-radius: 5px;
${props => props.url ? `background-image: url(${ImageGenerator(props.url)});` : 'background-color:#111222;'}
    
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    &:not(:last-child){
        margin-right: 10px;
    }
    @media(max-width:720px){
        &:not(:first-child){
            margin: 10px 0;
        }
    }
`
export const CityTitle = styled.h1`
    font-size: 40px;
    margin: 0 0 25px 0;

`
export const CityWrapperBlock = styled.div`
    width:100%;
    height: 100%;
    background-color: #1112225e;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity 0;
    transition: opacity .2s linear;
    color: white;
    font-weight: 700;
    letter-spacing: 1px;
    &:hover{
        opacity: 1
    }
`