import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { selectOrigin } from "../slices/navSlice";
import { useSelector } from "react-redux";

const Map = () => {
  //   const origin = useSelector(selectOrigin);
  //   console.log(origin.location);

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        // latitude: origin.location.lat,
        // longitude: origin.location.lng,
        latitude: 28.6139,
        longitude: 77.2090,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      mapType="mutedStandard"
    >
      {/* {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )} */}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
