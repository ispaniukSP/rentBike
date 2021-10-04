import styled from 'styled-components'

export const StyledPayment = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #fffff3;
    font-size: 25px;
`
export const PaymentWrapper = styled.div`
    width: 100%;
    padding-top: 60px;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
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