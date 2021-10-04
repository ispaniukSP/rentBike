import React, { useEffect }  from 'react'
import { useRouteMatch } from 'react-router'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import * as Styled from './style'

export default function Center() {
    const match = useRouteMatch();
    useEffect( () => {
        console.log(match)
    })


    return (
        <Styled.StyledCenter>
            <MainLayout />
        </Styled.StyledCenter>
    )
}
