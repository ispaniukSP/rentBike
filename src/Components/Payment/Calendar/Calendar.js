import React from 'react'

import * as Styled from './style'

export default function Calendar({children}) {
    return (
        <Styled.CalendarField>
            <Styled.CalendarTitle>Please input date of your trip: </Styled.CalendarTitle>
            
            <Styled.CalendarItem> 
                <Styled.CalendarSpan>From: </Styled.CalendarSpan>
                    {children[0]}
            </Styled.CalendarItem>
            
            <Styled.CalendarItem> 
                <Styled.CalendarSpan>To:</Styled.CalendarSpan>
                    {children[1]}
            </Styled.CalendarItem>
        </Styled.CalendarField>
    )
}
