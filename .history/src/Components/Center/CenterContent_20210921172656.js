import React from 'react'
import * as Styled from './style'
export default function CenterContent({info, ...props}) {
    return (
        <Styled.StyledWrapper>
            <Styled.CenterInformation>
                <Styled.CenterTitle>
                        Title
                </Styled.CenterTitle>
                
                <Styled.CenterText>

                </Styled.CenterText>

            </Styled.CenterInformation>

            <Styled.CenterButtons>

            </Styled.CenterButtons>
        </Styled.StyledWrapper>
    )
}
