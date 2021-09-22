import React from 'react';
import * as Styled from "./style"
import { Flex } from "./Components/Flex/Flex";


export const NotFound = () => {
    return(
        <Flex width="100%" height="80px">
            <Flex width="100%" height="100%" justify="center" align="center">
                <Styled.StyleContent>404 not page</Styled.StyleContent>
            </Flex>
        </Flex>
    )
}