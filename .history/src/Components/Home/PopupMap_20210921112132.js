import React from "react";
import { Popup } from "react-map-gl";
import * as Styled from "./style";

export default function PopupMap (props) {
    return(
        <Popup {...props}>
            {console.log(props.info)}
        </Popup>
    )
}