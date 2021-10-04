import React from 'react'
import { Flex } from '../Flex/Flex'
import * as Styled from './style'
export default function CenterContent({info, ...props}) {
    return (
        <Styled.StyledWrapper>
            <Flex width="100%" height="70%" direction="column" align="center">
                <Styled.CenterTitle>
                        {info.address}
                </Styled.CenterTitle>
                
                <Styled.CenterText>
                        {info.details}
                </Styled.CenterText>
            </Flex>

            <Styled.CenterButtons>
                    <Styled.CenterButton />
                    <Styled.CenterButton />
            </Styled.CenterButtons>
        </Styled.StyledWrapper>
    )
}
