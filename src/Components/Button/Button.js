import React from 'react'
import * as Styled from "./style"


export const Button = (props) => {
    return (
        <Styled.ButtonStyled {...props}>
            {props.children}
        </Styled.ButtonStyled>  
    )
}
