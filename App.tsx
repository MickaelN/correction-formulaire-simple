import React from "react"
import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import AuthNavigator from "./Navigator/Auth"

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <AuthNavigator />
    </NavigationContainer>
  )
}
