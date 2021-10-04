import axios from 'axios';
import React, { useEffect }  from 'react'
import { useRouteMatch } from 'react-router'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import * as Styled from './style'

export default function Center() {
    const match = useRouteMatch();
    useEffect( async () => {
        try{
            const centerData = axios.get(`http://localhost:3002/centers/${match.params.centerId}`)
            console.log(centerData.data)
        }
        catch{
            console.log("Error")
        }
    })


    return (
        <Styled.StyledCenter>
            <MainLayout />
        </Styled.StyledCenter>
    )
}
