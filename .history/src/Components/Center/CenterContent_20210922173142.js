import React from 'react'
import { Flex } from '../Flex/Flex'
import * as Styled from './style'
export default function CenterContent(props) {
    let price = 2000;
    price = price % 100 === 0 ? price/100 + '.00' : price/100
    return (
        <Styled.StyledWrapper>
            <Flex width="100%" height="70%" direction="column" align="center" justify="space-between">
                <Styled.CenterTitle>
                        {props?.info?.address}
                </Styled.CenterTitle>
                
                <Styled.CenterText>
                        {props?.info?.details}
                </Styled.CenterText>

                <Styled.CountBike>
                    Count bike: {props?.info?.countBike}
                </Styled.CountBike>
                <Styled.CountBike>
                    Price: {price}
                </Styled.CountBike>
            </Flex>

            <Flex width="100%" height="20%" align="center" justify="space-around" >
                    <Styled.CenterButton to={`/app/city/${props?.info?.cityId}`}>Back</Styled.CenterButton>
                    <Styled.CenterButton to={`/center/${props?.info?.id}/payment`}>Payment</Styled.CenterButton>
            </Flex>
        </Styled.StyledWrapper>
    )
}
