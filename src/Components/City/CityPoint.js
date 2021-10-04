import React from 'react'
import { Flex } from '../Flex/Flex'
import CityBlock from './CityBlock'
import * as Styled from './style'

export default function CityPoint() {
    return (
        <Styled.CityPointWrapper>
            <Flex width="100%" height="100%" mTop="5%" align="center" direction="column">
                <Styled.CityTitle>Choose your city</Styled.CityTitle>
                <Flex wrap="wrap" height="100%" justify="center">
                    <CityBlock url='Kharkiv' text="Kharkiv"/>
                    <CityBlock url='Odessa' text="Odessa"/>
                    <CityBlock url='Kiev' text="Kiev"/>
                </Flex>
            </Flex>
        </Styled.CityPointWrapper>
    )
}
