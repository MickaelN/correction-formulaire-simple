/**
 * Composant pour la premère étape du formulaire d'inscription. Elle comporte un champ pour l'email, un champ pour le mot de passe, un champ pour le mot de passe de confirmation et un bouton pour passer à l'étape suivante.
 */

import React, { useState } from "react"
import { View, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Input from "../../../Component/Form/Input"
import Button from "../../../Component/Form/Button"
import type { AuthStackParamList } from "../../../Navigator/Auth"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { isEmail, isNotEmpty } from "../../../Utils/Form"

type SignUpStep1ScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, "SignUpStep1">
//On défini un type pour les ereurs possible dans ce formulaire. Cela va nous éviter de faire plusieurs state par erreur comme dans le formulaire de connexion.
type error = {
    email?: string,
    password?: string,
    passwordConfirmation?: string,
}


const SignUpStep1Screen = () => {
    const navigation = useNavigation<SignUpStep1ScreenNavigationProp>()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")
    const [errors, setErrors] = useState<error>({})

    const onSubmit = () => {
        //On revérifie les champs avant de passer à l'étape suivante.
        onPasswordBlur()
        onPasswordConfirmationBlur()
        onEmailBlur()
        //Si il n'y a pas d'erreur, on passe à l'étape suivante
        if (errors.email == undefined && errors.password == undefined && errors.passwordConfirmation == undefined) {
            //On vérifie que les champs passwords sont identiques
            if (password !== passwordConfirmation) {
                setErrors({ ...errors, "password": "Les mots de passe ne correspondent pas" })
            } else {
                setErrors({ ...errors, "password": undefined })
                navigation.navigate("SignUpStep2", { email, password })
            }
        }
    }

    const onPasswordBlur = () => {
        setErrors({ ...errors, "password": isNotEmpty(password) ? undefined : "Le mot de passe est vide" })
    }
    const onPasswordConfirmationBlur = () => {
        setErrors({ ...errors, "passwordConfirmation": isNotEmpty(passwordConfirmation) ? undefined : "Le mot de passe de confirmation est vide" })
    }

    const onEmailBlur = () => {
        setErrors({ ...errors, "email": isNotEmpty(email) ? undefined : "L'email est vide" })
        if (errors.email == undefined) {
            setErrors({ ...errors, "email": isEmail(email) ? undefined : "L'email n'est pas valide" })
        }
    }

    return (
        <View style={styles.container}>
            <Input placeholder="Email" type="email" onChangeText={setEmail} value={email} onBlur={() => onEmailBlur()} error={errors.email} />
            <Input placeholder="Mot de passe" type="password" onChangeText={setPassword} value={password} onBlur={() => onPasswordBlur()} error={errors.password} />
            <Input placeholder="Confirmation du mot de passe" type="password" onChangeText={setPasswordConfirmation} value={passwordConfirmation} onBlur={() => onPasswordConfirmationBlur()} error={errors.passwordConfirmation} />
            <Button onPress={() => onSubmit()} title="SUIVANT" type="primary" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
})
export default SignUpStep1Screen