import React from 'react'
import { useHistory } from 'react-router'
import { Flex } from '../Flex/Flex'
import * as Styled from './style'
export default function CenterContent(props) {
    return (
        <Styled.StyledWrapper>
            <Flex width="100%" height="70%" direction="column" align="center">
                <Styled.CenterTitle>
                        {props?.info?.address}
                </Styled.CenterTitle>
                
                <Styled.CenterText>
                        {props?.info?.details}
                </Styled.CenterText>
            </Flex>

            <Flex width="100%" height="20%" align="center" justify="space-around" >
                    <Styled.CenterButton to={`/city/${props?.info?.cityId}/center/${props?.info?.id}`}>Back</Styled.CenterButton>
                    <Styled.CenterButton to={`/center/${props?.info?.id}/payment`}>Payment</Styled.CenterButton>
            </Flex>
        </Styled.StyledWrapper>
    )
}
