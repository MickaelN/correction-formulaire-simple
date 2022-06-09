/**
 * Ecran de succès de l'inscription
 */

import React from "react"
import {View, Text} from "react-native"
import type { AuthStackParamList } from "../Navigator/Auth"
import { RouteProp, useRoute } from "@react-navigation/native"

type SuccessScreenRouteProp = RouteProp<AuthStackParamList, "Success">

const SuccessScreen = () => {
    const { email, password, firstName, lastName, birthDate, civility } = useRoute<SuccessScreenRouteProp>().params
    console.log(`Email : ${email}, Password : ${password}, Prénom : ${firstName}, Nom : ${lastName}, Date de naissance : ${birthDate}, Civilité : ${civility}`)
    return (
        <View>
            <Text>Votre inscription a bien été prise en compte {firstName}</Text>
        </View>
    )
}

export default SuccessScreen