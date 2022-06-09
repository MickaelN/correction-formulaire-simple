import React from "react"
import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native"
import AuthNavigator from "./Navigator/Auth"
import { View,Image, StyleSheet } from "react-native"

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("./Assets/Logo.png")} style={styles.logo} />
        </View>
        <AuthNavigator />
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
  },
  logo: {
      width: 150,
      resizeMode: "contain",
  },
  logoContainer: {
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      backgroundColor: "#33058d"
  },
})