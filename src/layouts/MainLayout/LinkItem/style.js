import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LinkField = styled(Link)`
    width:100%;
    height: 60px;
    display:flex;
    align-items: center;
    transition: background-color .2s linear;

    &: hover{
        background-color: #a6a7aa;
    }
`

export const LinkIconField = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LinkTextField = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    color: #fffff1;
    font-weight: 700;

`