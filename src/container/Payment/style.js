import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const StyledPayment = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #fffff3;
    font-size: 25px;
`
export const PaymentWrapper = styled.div`
    width: 100%;
    padding-top: 60px;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const PaymentContent = styled.div`
    width: 600px;
    background-color: #F6D7A7;
    border-radius: 10px;
    padding: 20px;
`
export const PaymentForm = styled.form`
    width: 500px;
    height:auto;
    font-size: 20px;
    padding-top: 30px;
`
export const ButtonPayment = styled.button`
    border: none;
    outline: none;
    margin-top: 20px;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    width: 100%;
    transition: background-color .3s linear,
    color .3s linear;

    &:hover{
        background-color:#040404d6;
        color: white;
    }
`
export const CountBike = styled.input`
margin-left: 15px;
font-size: 20px;
    width: 30px;
    height: 30px;
    border:none;
    outline: none;
    background-color: transparent;
    text-align:center;
    border-bottom: 2px solid #111222;
    transition: border-color .3s linear;
    &:hover{
        border-color: #111222ed
    }
`
export const CountField = styled.div`
    font-size: 23px;
`
export const PaymentButton = styled.button`
    border-radius: 5px;
    width: 110px;
    height: 45px;
    font-size: 20px;
    border: none;
    outline: none;
    transition: background-color .3s linear;
    color .3s linear;
    margin-top: 50px;
    &:hover{
        background-color: #111222;
        color: #fffeee;
    }    
`
export const SendForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Consider = styled.div`
    width:100%;
    height: 95px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
`
export const ConsiderItem = styled.div`
    display:flex;
    flex-direction: column;
    max-width: 263px;
    width: 100%;
    height: 100%; 
`
export const ConsiderTitle = styled.span`
    font-size: 23px;
    color: #111222;
    margin: 0;
    font-weight: 400;
`
export const ConsiderField = styled.div`
    height: 56px;
    width: 100%;
    border: 1px solid #111222;
    border-radius: 5px;
`
export const ConsiderInput = styled.input`
    width: calc(94% + 2px);
    padding: 18px 14px;
    padding-right: 0;
    border: none;
    border-radius: 5px;
    background: transparent;
    outline: none;
    font-size: 16px;
`
export const ConsiderButtons = styled.div`
    width: 90%;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
`
export const ConsiderButton = styled(Link)`
    background: transparent;
    text-decoration: underline;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 20px;
    transition: color .2s linear;
    &:hover{
        color: #111222;
    }
`