/**
 * Ecran d'accueil composé d'une partie avec le logo et d'une autre avec le bouton de connexion et d'inscription
 */


import React from "react"
import { useNavigation } from "@react-navigation/native"
import { View,  StyleSheet } from "react-native"
import Button from "../Component/Form/Button"
import type { AuthStackParamList } from "../Navigator/Auth"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"

type HomeScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList>

const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>()
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button title="Se connecter" type="primary" onPress={() => { navigation.navigate("Login") }} />
            </View>
            <View style={styles.button}>
                <Button title="S'inscrire" type="secondary" onPress={() => { navigation.navigate("SignUpStep1") }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
    },
    button: {
        marginBottom: 20,
    },
})

export default HomeScreen
