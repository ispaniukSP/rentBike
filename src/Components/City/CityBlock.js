import React from 'react'
import {withRouter, useHistory} from "react-router-dom";
import * as Styled from './style'
import { useDispatch, useSelector } from 'react-redux';


function CityBlock(props) {
    const city = useSelector(state => state.city);
    const history = useHistory();
    function sendRequest(){
        const cityIndex = city.cities.findIndex(item => item.city === props.text)
        const cityId = city.cities[cityIndex].id;
        history.push(`/app/city/${cityId}`)
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
