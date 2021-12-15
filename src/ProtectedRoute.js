import React from 'react'
import { Redirect } from 'react-router-dom';
import tokenService from './api/tokenService';

export default function ProtectedRoute(props) {
    const Component = props.component;
    return !!tokenService.getAccessToken() ? (
        <Component />
    ) 
    : (<Redirect to={{pathname: '/auth/signin'}} />)
}
