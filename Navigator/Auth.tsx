/**
 * Je sépare mon navigateur du reste au cas où je devrais en faire d'autres
 */

import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../Screen/Home"
import LoginScreen from "../Screen/Auth/Login"

const AuthStack = createNativeStackNavigator()

const AuthNavigator = () => {
  return (
        <AuthStack.Navigator  screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Home" component={HomeScreen} />
            <AuthStack.Screen name="Login" component={LoginScreen} />
        </AuthStack.Navigator>
  )
}

export default AuthNavigator