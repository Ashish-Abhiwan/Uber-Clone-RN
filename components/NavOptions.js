import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const NavOptions = () => {
    const navigation = useNavigation();

  const data = [
    {
      id: "123",
      title: "Get a ride",
      image: "https://links.papareact.com/3pn",
      screen: "MapScreen",
    },
    {
      id: "456",
      title: "Order Food",
      image: "https://links.papareact.com/28w",
      screen: "EatsScreen",
    },
  ];
  return (
    <View>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={[
                styles.navButton,
                tw`pt-4 p-2 pb-6 pl-6 bg-gray-200 mr-2 w-38`,
              ]}
              onPress={() => navigation.navigate(item.screen)}
            >
              <View>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 100, height: 100, resizeMode: "contain" }}
                />
                <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon type="antdesign" name="arrowright" color="white" style={tw`p-2 bg-black rounded-full w-10 mt-3`}/>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  navButton: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
