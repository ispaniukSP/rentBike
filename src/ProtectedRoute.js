import React from 'react'
import { Redirect } from 'react-router-dom';

export default function ProtectedRoute(props) {
    const Component = props.component;
    const isAuth = localStorage.getItem('token');
    return isAuth ? (
        <Component />
    ) 
    : (<Redirect to={{pathname: '/auth/signin'}} />)
}
