/**
 * Je sépare mon navigateur du reste au cas où je devrais en faire d'autres
 */

import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../Screen/Home"
import LoginScreen from "../Screen/Auth/Login"
import SignUpStep1Screen from "../Screen/Auth/SignUp/Step1"
import SignUpStep2Screen from "../Screen/Auth/SignUp/Step2"
import SuccessScreen from "../Screen/Success"

//Le typage de mon navigateur
export type AuthStackParamList = {
    Home: undefined,
    Login: undefined,
    SignUpStep1: undefined,
    SignUpStep2: { email: string, password: string }, //Je défini les paramètres de ma route
    Success : { email: string, password: string, firstName: string, lastName: string, birthDate: string, civility: string }
}

const AuthStack = createNativeStackNavigator<AuthStackParamList>()

const AuthNavigator = () => {
  return (
        <AuthStack.Navigator  screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Home" component={HomeScreen} />
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen name="SignUpStep1" component={SignUpStep1Screen} />
            <AuthStack.Screen name="SignUpStep2" component={SignUpStep2Screen} />
            <AuthStack.Screen name="Success" component={SuccessScreen} />
        </AuthStack.Navigator>
  )
}

export default AuthNavigator