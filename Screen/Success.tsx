/**
 * Ecran de succès de l'inscription
 */

import React from "react"
import { View, Text, StyleSheet } from "react-native"
import type { AuthStackParamList } from "../Navigator/Auth"
import { RouteProp, useRoute } from "@react-navigation/native"

type SuccessScreenRouteProp = RouteProp<AuthStackParamList, "Success">

const SuccessScreen = () => {
    const { email, password, firstName, lastName, birthDate, civility } = useRoute<SuccessScreenRouteProp>().params
    console.log(`Email : ${email}, Password : ${password}, Prénom : ${firstName}, Nom : ${lastName}, Date de naissance : ${birthDate}, Civilité : ${civility}`)
    return (
        <View style={styles.container}>
            <Text>Votre inscription a bien été prise en compte {firstName}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    }
})

export default SuccessScreen