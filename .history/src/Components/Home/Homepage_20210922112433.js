import React, { useEffect, useState } from "react";
import { Flex } from "../Flex/Flex";
import ReactMapGL from "react-map-gl";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { useHistory, useRouteMatch } from "react-router";
import MarkerMap from "./MarkerMap";
import axios from "axios";
import PopupMap from "./PopupMap";

export const HomePage = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const [center, setCenter] = useState(null);
  const [city, setCity] = useState(null);
  const [selectedPark, setSelectedPark ] = useState(null)
  const [checkPin, setCheckPin] = useState(true);

  const [viewport, setViewPort] = useState({
    latitude: 49.99406561675524,
    longitude: 36.23775244246229,
    zoom: 12,
    width: "100%",
    height: "100%",
  });

  useEffect(async () => {
    try {
      if (match.params.cityId) {
        const cityData = await axios.get(
          `http://localhost:3002/cities/${match.params.cityId}`
        );
        const centersData = await axios.get(
          `http://localhost:3002/centers?cityId=${match.params.cityId}`
        );
        setCity({ ...cityData.data, centers: centersData.data || [] });
        setViewPort({
          ...viewport,
          latitude: cityData.data.coordinates[1],
          longitude: cityData.data.coordinates[0],
        });
      }
    } catch (err) {}
  }, [match.params.cityId]);

  useEffect(async () => {
    try {
      if (match.params.centerId && city) {
        const { data } = await axios.get(
          `http://localhost:3002/centers/${match.params.centerId}`
        );
        if (data.cityId !== city.id) {
          history.push(`/app/city/${city.id}`);
        } else {
          setCenter(data);
        }
      }
    } catch (err) {}
  }, [match.params.centerId, city]);

  const onPinClick = (item) => {
    const id = item.id;
    setCheckPin(true)
    setSelectedPark(item)
    history.push(`/app/city/${city.id}/center/${id}`)
  }


  return (
    <Flex width="100%" height="100vh">
      <ReactMapGL
        mapboxApiAccessToken={
          "pk.eyJ1IjoiZGFuaWwtaXNwIiwiYSI6ImNrdGs1YWlwcjFpOGwzMHBlMGx0dWFnd3oifQ.6SReIRBwLtFOKrjPDnMBSQ"
        }
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(item) => setViewPort(item)}
      >
        {city?.centers.map((item) => (
            <MarkerMap
              key={item.id}
              latitude={item.geometry.coordinates[1]}
              longitude={item.geometry.coordinates[0]}
              isSelected={checkPin ? item.id === center?.id : null}
              onClick={() =>{
                onPinClick(item)}}
            />
          ))}

          {selectedPark ?
             (
              <PopupMap 
              latitude={item.geometry.coordinates[1]} 
              longitude={item.geometry.coordinates[0]}
              onClose ={() => item.id === center?.id ? (
                setSelectedPark(null),
                history.push(`/app/city/${item.cityId}`),
                setCheckPin(false)
              )  : null }
              info = {selectedPark}
              />
            ) : null
          }
      </ReactMapGL>
      <MainLayout />
    </Flex>
  );
};
