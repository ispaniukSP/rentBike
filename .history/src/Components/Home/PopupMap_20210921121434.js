import React from "react";
import { Popup } from "react-map-gl";
import { Flex } from "../Flex/Flex";
import * as Styled from "./style";

export default function PopupMap ({info, ...props}) {
    return(
        <Popup {...props}>
            <Flex width="300px" direction="column" align="center" >
                <Styled.StyledTitlePopup>{info.address}</Styled.StyledTitlePopup>
                <Styled.StyledTextPopup>{info.details}</Styled.StyledTextPopup>
            </Flex>
        </Popup>
    )
}