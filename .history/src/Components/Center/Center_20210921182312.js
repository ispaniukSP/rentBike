import axios from 'axios';
import React, { useEffect, useState }  from 'react'
import { useRouteMatch } from 'react-router'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import CenterContent from './CenterContent';
import * as Styled from './style'

export default function Center() {
    const [center, setCenter] = useState()

    const match = useRouteMatch();
    useEffect(async function() {
        try{
            const centerData = await axios.get(`http://localhost:3002/centers/${match.params.centerId}`)
            .then(setCenter(centerData))        
        }
        catch{}
    }, [match.params.centerId])
    return (
        <Styled.StyledCenter>
            <MainLayout />
            <CenterContent info={center} />
        </Styled.StyledCenter>
    )
}
