import React, { useEffect, useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import { getCurrentCenter } from '../../store/actions/center/center.action';
import { Flex } from '../../components/Flex/Flex';
import { AppLoader } from '../../components/AppLoader';
import CenterContent from './CenterContent';
import * as Styled from './style'

export default function Center() {
    const centerSel = useSelector(state => state.center)
    const dispatch = useDispatch();
    const match = useRouteMatch();
    useEffect(() => {
        if(match.params.centerId){
            dispatch(getCurrentCenter(match.params.centerId))
        }
    }, [match.params.centerId])

    return (
        <Styled.StyledCenter>
            <MainLayout />
            <Flex width="100%" height="70%" align="center" justify="center">
                {centerSel.loader ?
                (<Flex >
                    <AppLoader />
                </Flex>) 
                : (<CenterContent info={centerSel.currentCenter} />) }
            </Flex>
        </Styled.StyledCenter>
    )
}