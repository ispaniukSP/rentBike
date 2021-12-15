import React from 'react'

import * as Styled from './style'

export default function Calendar({children}) {
    return (
        <Styled.CalendarField>
            <Styled.CalendarItem> 
                <Styled.CalendarSpan>Date: </Styled.CalendarSpan>
                    {children[0]}
            </Styled.CalendarItem>
            
            <Styled.CalendarItem> 
                <Styled.CalendarSpan>Time:</Styled.CalendarSpan>
                    {children[1]}
            </Styled.CalendarItem>
        </Styled.CalendarField>
    )
}
