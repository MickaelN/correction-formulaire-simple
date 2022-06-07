/**
 * Je sépare mon navigateur du reste au cas où je devrais en faire d'autres
 */

import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../Screen/Home"

const AuthStack = createNativeStackNavigator()

const AuthNavigator = () => {
  return (
        <AuthStack.Navigator  screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Home" component={HomeScreen} />
        </AuthStack.Navigator>
  )
}

export default AuthNavigator