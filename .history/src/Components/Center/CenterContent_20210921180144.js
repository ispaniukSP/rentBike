import React from 'react'
import { useHistory } from 'react-router'
import { Flex } from '../Flex/Flex'
import * as Styled from './style'
export default function CenterContent({info, ...props}) {
    const history = useHistory();
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

            <Flex width="100%" height="20%" align="center" justify="space-around" >
                    <Styled.CenterButton to={history.goBack()}>Back</Styled.CenterButton>
                    <Styled.CenterButton to={`/centers/${info.id}/payment`}>Payment</Styled.CenterButton>
            </Flex>
        </Styled.StyledWrapper>
    )
}
