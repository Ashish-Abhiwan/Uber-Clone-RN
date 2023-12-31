import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import NavigateCard from '../components/NavigateCard'
import RideSelectionScreen from './RideSelectionScreen'

const MapScreen = () => {
    const Stack  = createStackNavigator();
  return (
    <View>
      <View style = {tw`h-1/2`}>
        <Map />
      </View>
      <View style = {tw`h-1/2`}>
        <Stack.Navigator>
            <Stack.Screen name='NaivgateCard' component={NavigateCard} options={{
                headerShown: false
            }} />
            <Stack.Screen name='RideSelection' component={RideSelectionScreen} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})