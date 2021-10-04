import React from 'react'
import * as Styled from "./style"

export default function Input(props) {
    const { id, text, value, error } = props;
    return (
        <Styled.InputField >
            <Styled.InputStyle className={`${value.length || !!error ? 'open': '' }`} {...props} autoComplete="off" />
                <Styled.LabelStyle htmlFor={id}>{text}</Styled.LabelStyle>
                <Styled.ErrorComment>{error}</Styled.ErrorComment>
        </Styled.InputField>
    )
}
