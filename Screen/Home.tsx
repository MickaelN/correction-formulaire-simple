/**
 * Ecran d'accueil composé d'une partie avec le logo et d'une autre avec le bouton de connexion et d'inscription
 */

import React from "react"
import { View, Image, StyleSheet } from "react-native"
import Button from "../Component/Form/Button"

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require("../Assets/Logo.png")} style={styles.logo} />
            </View>
            <View style={styles.buttonContainer}>
                    <Button title="Se connecter" type="primary" onPress={() => { }} />
                    <Button title="S'inscrire" type="secondary" onPress={() => { }} />
            </View>
        </View>
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
    buttonContainer: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
})

export default HomeScreen
