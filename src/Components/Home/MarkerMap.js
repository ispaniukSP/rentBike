import React from "react";
import { Marker } from "react-map-gl";
import * as Styled from "./style";
import IconsComponent from "../../layouts/MainLayout/IconsComponent/IconsComponent";

export default function MarkerMap({ isSelected, ...props }) {
  return (
    <Marker {...props}>
      <Styled.ButtonPoint>
        <IconsComponent id={isSelected ? "selectedPin" : "pin"} />
      </Styled.ButtonPoint>
    </Marker>
  );
}
