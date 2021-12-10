import React, { useEffect, useState } from "react";
import { Flex } from "../Flex/Flex";
import ReactMapGL from "react-map-gl";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { useHistory, useRouteMatch } from "react-router";
import MarkerMap from "./MarkerMap";
import axios from "axios";
import PopupMap from "./PopupMap";
import { useDispatch, useSelector } from 'react-redux';
import { getCenters, getCurrentCenter } from "../../store/actions/center/center.action";
import { getCurrentCity } from "../../store/actions/city/city.action";
import { AppLoader } from "../AppLoader";

export const HomePage = () => {
  const history = useHistory();
  const match = useRouteMatch();
  // const [center, setCenter] = useState(null);
  // const [city, setCity] = useState(null);
  const [selectedPark, setSelectedPark ] = useState(null)
  const [checkPin, setCheckPin] = useState(true);
  const citySel = useSelector(state => state.city);
  const centerSel = useSelector(state => state.center);
  const dispatch = useDispatch();
  const [viewport, setViewPort] = useState({
    latitude: 49.99406561675524,
    longitude: 36.23775244246229,
    zoom: 12,
    width: "100%",
    height: "100%",
  });

  useEffect(async () => {
    console.log(match.params)
    await Promise.all([ 
      dispatch(getCurrentCity(match.params.cityId)), 
      dispatch(getCenters(match.params.cityId)),
    ])
    if(citySel.currentCity){
      setViewPort({
        ...viewport,
        latitude: citySel.currentCity.coordinates[1],
        longitude: citySel.currentCity.coordinates[0],
      })
    }
  }, []);

  useEffect(() => {
    if(match.params.centerId !== centerSel.currentCenter?.id && match.params.centerId){
      dispatch(getCurrentCenter(match.params.centerId))
      setCheckPin(true);
    }
    console.log(match.params.centerId)
  }, [match.params.centerId])

  useEffect(() => {
    if(centerSel.currentCenter && citySel.currentCity){
      setSelectedPark(centerSel.currentCenter)
      if (centerSel.currentCenter.cityId !== citySel.currentCity?.id) {
        history.push(`/app/city/${citySel.currentCity.id}`);
      } 
    }
  }, [centerSel.currentCenter, match.params.centerId]);

  const onPinClick = (item) => {
    const id = item.id;
    if(match.params.centerId != centerSel.currentCenter?.id){
      dispatch(getCurrentCenter(id))
    }
    setCheckPin(true);
    history.push(`/app/city/${citySel?.currentCity.id}/center/${id}`);
  }

  return (
    <Flex width="100%" height="100vh">
      {
        citySel.loader && centerSel.loader ? <AppLoader /> :(
          <ReactMapGL
            mapboxApiAccessToken={
              "pk.eyJ1IjoiZGFuaWwtaXNwIiwiYSI6ImNrdGs1YWlwcjFpOGwzMHBlMGx0dWFnd3oifQ.6SReIRBwLtFOKrjPDnMBSQ"
            }
            {...viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={(item) => setViewPort(item)}
          >
            {centerSel.centers && centerSel.centers.map((item) => (
                <MarkerMap
                  key={item.id}
                  latitude={item.geometry.coordinates[1]}
                  longitude={item.geometry.coordinates[0]}
                  isSelected={centerSel.currentCenter && match.params.centerId ? item.id === centerSel.currentCenter.id : null}
                  onClick={() =>{
                    onPinClick(item)}}
                />
              ))}

              {selectedPark && match.params.centerId ?
                (
                  <PopupMap 
                  latitude={selectedPark.geometry.coordinates[1]} 
                  longitude={selectedPark.geometry.coordinates[0]}
                  onClose ={() => selectedPark.id === centerSel?.currentCenter.id ? (
                    history.push(`/app/city/${selectedPark.cityId}`),
                    setCheckPin(null),
                    setSelectedPark(null)
                  )  : null }
                  info = {selectedPark}
                  />
                ) : null
              }
          </ReactMapGL>
        )
      }
      <MainLayout />
    </Flex>
  );
};
