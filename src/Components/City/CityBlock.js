import axios from 'axios';
import React from 'react'
import {withRouter, useHistory} from "react-router-dom";
import * as Styled from './style'

function CityBlock(props) {
    const history = useHistory();
    function sendRequest(){
        axios.get('http://localhost:3002/cities')
        .then(response => {
            console.log(response)
            const findCityIndex = response.data.findIndex(item => item.city === props.text)
            const getCityId = response.data[findCityIndex].id;
            history.push(`/app/city/${getCityId}`)
        })
        .catch(e => console.log(e))
    }

    return (
        <Styled.CityBlock onClick={sendRequest} {...props}>
            <Styled.CityWrapperBlock>
                {props.text}
            </Styled.CityWrapperBlock>
        </Styled.CityBlock>
    )
}

export default withRouter(CityBlock)
