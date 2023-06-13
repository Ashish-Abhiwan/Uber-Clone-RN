import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import tw from 'twrnc'

const NavFavourites = () => {
    const data = [
        {
            id : "123",
            icon : "home",
            location : "home",
            destination : 'Nehru Nagar, Ghaziabad'
        },
        {
            id : "456",
            icon : "briefcase",
            location : "Work",
            destination : 'Jhilmil, Delhi'
        },
    ]
  return (
    <FlatList 
        data = {data}
        ItemSeparatorComponent={() => <View style = {[tw`bg-gray-300`, {height : .5}]}></View>}
        keyExtractor={(item) => item.id}
        renderItem={({item : {icon, location, destination}}) => {
            return (
                <TouchableOpacity style = {tw`flex-row items-center mt-4 mb-4`}>
                    <Icon 
                    style={tw`rounded-full bg-gray-300 p-4 mr-3`}
                        name={icon}
                        type='ionicon'
                        color={"#fff"}
                        size={18}
                    />
                    <View>
                        <Text style = {[{textTransform : 'capitalize'}, tw`font-semibold text-lg`]}>{location}</Text>
                        <Text style = {tw`text-gray-400`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )
        }}
    />
  )
}

export default NavFavourites

const styles = StyleSheet.create({})