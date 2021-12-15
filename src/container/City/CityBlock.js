import React from 'react'
import {withRouter, useHistory} from "react-router-dom";
import * as Styled from './style'
import { useDispatch, useSelector } from 'react-redux';
import { getCities } from '../../store/actions/city/city.action';
import { setUserAccess } from '../../store/actions/user/user.action';


function CityBlock(props) {
    const city = useSelector(state => state.city);
    const history = useHistory();
    const dispatch = useDispatch();
    
    function sendRequest(){
        dispatch(getCities())
        if(city.cities){
            const cityIndex =  city.cities.findIndex(item => item.city === props.text)
            const cityId = city.cities[cityIndex].id;
            history.push(`/app/city/${cityId}`)
        }else{
            if((city.error?.status == 401)) {
                console.log('error')
                localStorage.removeItem('token');
                dispatch(setUserAccess(false))
              }
        }
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
