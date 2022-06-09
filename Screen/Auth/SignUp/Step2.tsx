/**
 * Composant pour l'étape 2 du formulaire d'inscription. Elle comporte une liste déroulante pour la civilité, un champ pour le nom, un champ pour le prénom, un datepiker pour la date de naissance et un bouton pour passer à l'étape suivante.
 */

import React, { useState } from "react"
import { View, StyleSheet, Text } from "react-native"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import Input from "../../../Component/Form/Input"
import Button from "../../../Component/Form/Button"
import DatePicker from "../../../Component/Form/DatePicker"
import type { AuthStackParamList } from "../../../Navigator/Auth"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Picker } from "@react-native-picker/picker"
import { isNotEmpty } from "../../../Utils/Form"

type SignUpStep2ScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList>
type SignUpStep2ScreenRouteProp = RouteProp<AuthStackParamList, "SignUpStep2">

type error = {
    firstName?: string,
    lastName?: string,
    birthDate?: string,
    civility?: string,
}


const SignUpStep2Screen = () => {
    const navigation = useNavigation<SignUpStep2ScreenNavigationProp>()
    const { email, password } = useRoute<SignUpStep2ScreenRouteProp>().params
    const [errors, setErrors] = useState<error>({})
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [birthDate, setBirthDate] = useState<string>("")
    const [civility, setCivility] = useState<string>("")
    const onsubmit = () => {
        if (!isNotEmpty(firstName)) {
            setErrors({ ...errors, "firstName": "Le prénom est vide" })
        }
        if (!isNotEmpty(lastName)) {
            setErrors({ ...errors, "lastName": "Le nom est vide" })
        }
        if (!isNotEmpty(birthDate)) {
            setErrors({ ...errors, "birthDate": "La date de naissance est vide" })
        }
        if (!isNotEmpty(civility)) {
            setErrors({ ...errors, "civility": "La civilité est vide" })
        }
        if (errors.birthDate == undefined && errors.firstName == undefined && errors.lastName == undefined && errors.civility == undefined) {
            navigation.navigate("Success", { email, password, firstName, lastName, birthDate, civility })
        }

    }

    const onLastNameBlur = () => {
        setErrors({ ...errors, "lastName": isNotEmpty(lastName) ? undefined : "Le nom est vide" })
    }

    const onFirstNameBlur = () => {
        setErrors({ ...errors, "firstName": isNotEmpty(firstName) ? undefined : "Le prénom est vide" })
    }

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={civility}
                onValueChange={(itemValue, itemIndex) => {
                    setCivility(itemValue)
                    setErrors({ ...errors, "civility": undefined })
                }}>
                <Picker.Item label="Civilité" value="" enabled={false} />
                <Picker.Item label="Monsieur" value="Monsieur" />
                <Picker.Item label="Madame" value="Madame" />
            </Picker>
            {errors.civility && <Text style={styles.error}>{errors.civility}</Text>}
            <Input placeholder="Nom" type="text" onChangeText={setLastName} value={lastName} error={errors.lastName} onBlur={() => onLastNameBlur()} />
            <Input placeholder="Prénom" type="text" onChangeText={setFirstName} value={firstName} error={errors.firstName} onBlur={() => onFirstNameBlur()} />
            <DatePicker date={birthDate} onChangeDate={setBirthDate} error={errors.birthDate} />
            <Button onPress={() => onsubmit()} title="SUIVANT" type="primary" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    error: {
        color: "red",
        marginBottom: 10,
    },
})
export default SignUpStep2Screen