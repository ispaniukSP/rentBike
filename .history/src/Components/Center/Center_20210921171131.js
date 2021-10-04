import axios from 'axios';
import React, { useEffect, useState }  from 'react'
import { useRouteMatch } from 'react-router'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import * as Styled from './style'

export default function Center() {
    cosnt [center, setCenter] = useState()


    const match = useRouteMatch();
    useEffect( async () => {
        try{
            const { data } = await axios.get(`http://localhost:3002/centers/${match.params.centerId}`)
            console.log(data)
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
