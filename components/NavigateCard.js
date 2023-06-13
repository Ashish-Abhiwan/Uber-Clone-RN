import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";

const NavigateCard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style = {[tw`bg-white`, {height : "100%"}]}>
      <Text style={tw`text-center p-4 text-xl font-semibold`}>
        Choose Your Destination
      </Text>
      <View>
        <Button
          title="Go to ride page"
          containerStyle={{ width: 180, alignSelf: "center" }}
          onPress={() => navigation.navigate("RideSelection")}
        />
        <View style = {tw`pl-4`}><NavFavourites/></View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({});
