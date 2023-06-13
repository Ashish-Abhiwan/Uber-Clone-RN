import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import tw from "twrnc";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const RideSelectionScreen = () => {
  const navigation = useNavigation();
  const [selectedCar, setSelectedCar] = useState(null)
  const data = [
    {
      id: "Uber-X-123",
      title: "Uber-X",
      multiplier: 1,
      image: "https://links.papareact.com/3pn",
    },
    {
      id: "Uber-XL-456",
      title: "Uber-XL",
      multiplier: 1.5,
      image: "https://links.papareact.com/5w8",
    },
    {
      id: "Uber-LUX-789",
      title: "Uber-LUX",
      multiplier: 1.75,
      image: "https://links.papareact.com/7pf",
    },
  ];
  return (
    <SafeAreaView style={tw`bg-white flex-1 p-4`}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "relative",
        }}
      >
        <TouchableOpacity
          style={[tw`pl-3`]}
          onPress={() => navigation.navigate("NaivgateCard")}
        >
          <Icon name="left" type="antdesign" size={18} />
        </TouchableOpacity>
        <Text style={tw`font-semibold text-lg absolute left-25`}>
          Select Your Ride
        </Text>
      </View>

      {/* Show Rides */}
      <FlatList
        style={tw`mt-4`}
        showsVerticalScrollIndicator = {false}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
          onPress={() => setSelectedCar(item)}
          style={[
            tw`mt-2 flex-row ${item.id === selectedCar?.id && "bg-gray-200"}`,
            { justifyContent: "space-between", alignItems: "center", borderRadius: 5, paddingHorizontal: 8 },
          ]}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: 80,
                height: 80,
                resizeMode: "contain",
              }}
            />
            <View style = {{justifyContent: 'center', alignItems: 'center'}}>
              <Text style = {tw`text-xl font-semibold`}>{item.title}</Text>
              <Text>30 mins</Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Icon type="font-awesome" name="rupee" size={14}/>
              <Text style = {{fontSize: 16, marginLeft: 1}}>199.00</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Confirm Ride Btn */}
      <TouchableOpacity style = {{justifyContent: 'center', alignItems: 'center', backgroundColor: '#000', padding: 10, marginTop: 10, borderRadius: 8}}>
        <View style = {{flexDirection: 'row'}}>
          <Icon name = "car" type="font-awesome" color={"white"}/>
          <Text style = {{color: '#fff', fontWeight: 'bold', fontSize: 16, marginLeft: 6}}>Confirm Ride</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RideSelectionScreen;

const styles = StyleSheet.create({});
