import React from 'react'
import * as Styled from './style' 
import IconsComponent from '../IconsComponent/IconsComponent'

export default function LinkItem(props) {
    return (
        <Styled.LinkField to={props.link}>
            <Styled.LinkIconField>
                <IconsComponent id={props.id}/>
            </Styled.LinkIconField>

            <Styled.LinkTextField>
                {props.text}
            </Styled.LinkTextField>
        </Styled.LinkField>
    )
}
