import axios from 'axios';
import React, { useEffect, useState }  from 'react'
import { useRouteMatch } from 'react-router'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import CenterContent from './CenterContent';
import * as Styled from './style'

export default function Center() {
    const [center, setCenter] = useState()

    const match = useRouteMatch();
    useEffect(async () => {
        try{
            const centerData= await axios.get(`http://localhost:3002/centers/${match.params.centerId}`)
            console.log(centerData.data)
            setCenter(data)
        }
        catch{
            console.log("Error")
        }
    }, [match.params.centerId])
    console.log(center)
    return (
        <Styled.StyledCenter>
            <MainLayout />
            <CenterContent info={center} />
        </Styled.StyledCenter>
    )
}
