import React from 'react'
import { Flex } from '../Flex/Flex'
import * as Styled from './style'
export default function CenterContent({info, ...props}) {
    return (
        <Styled.StyledWrapper>
            <Flex width="100%" height="70%">
                <Styled.CenterTitle>
                        Title
                </Styled.CenterTitle>
                
                <Styled.CenterText>

                </Styled.CenterText>

            </Flex>

            <Styled.CenterButtons>

            </Styled.CenterButtons>
        </Styled.StyledWrapper>
    )
}
