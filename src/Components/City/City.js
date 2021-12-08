import React from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import CityPoint from './CityPoint'
import * as Styled from './style'

export default function City() {
    return (
        <Styled.StyledCity>
            <MainLayout />
            <CityPoint />
        </Styled.StyledCity>
    )
}
