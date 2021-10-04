import axios from 'axios';
import React, { useEffect, useState }  from 'react'
import { useHistory, useRouteMatch } from 'react-router'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import CenterContent from './CenterContent';
import * as Styled from './style'

export default function Center() {
    const [center, setCenter] = useState()
    const history = useHistory();

    const match = useRouteMatch();
    useEffect(async function() {
        try{
            if (match.params.centerId) {
                const { data } = await axios.get(
                    `http://localhost:3002/centers/${match.params.centerId}`
                );
                if (data.cityId) {
                    history.push(`/center/${match.params.centerId}`);
                } else {
                    setCenter(data);
                }
            }
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
