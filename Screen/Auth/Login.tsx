/**
 * Page de login comprenant une image, deux champs de texte, un bouton de connexion et un lien vers la page d'inscription
 */

import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Input from "../../Component/Form/Input"
import Button from "../../Component/Form/Button"
import Validator from "validator"

const LoginScreen = () => {
    const navigation = useNavigation()
    const [email, setEmail] = React.useState<string>("")
    const [password, setPassword] = React.useState<string>("")
    const [errorEmail, setErrorEmail] = React.useState<string | undefined>(undefined)
    const [errorPassword, setErrorPassword] = React.useState<string | undefined>(undefined)

    const isValidAndISNotEmptyEmail = () => {
        if (email == "") {
            setErrorEmail("L'email ne doit pas être vide")
        }
        else if (!Validator.isEmail(email)) {
            setErrorEmail("L'email est invalide")
        } else {
            setErrorEmail(undefined)
        }
    }
    const isNotEmptyPassword = () => {
        if (password == "") {
            setErrorPassword("Le mot de passe ne doit pas être vide")
        } else {
            setErrorPassword(undefined)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require("../../Assets/Logo.png")} style={styles.logo} />
            </View>
            <View style={styles.formContainer}>
                <Input placeholder="Email" onChangeText={(text) => { setEmail(text) }} value={email} type="text" error={errorEmail} onBlur={() => isValidAndISNotEmptyEmail()} />
                <Input placeholder="Mot de passe" onChangeText={(text) => { setPassword(text) }} value={password} type="password" onBlur={()=> isNotEmptyPassword} error={errorPassword}/>
                <Button title="Se connecter" type="primary" onPress={() => { }} />
            </View>
            <View style={styles.linkContainer}>
                <TouchableOpacity onPress={() => { }}>
                    <Text style={styles.link}>S'inscrire</Text>
                </TouchableOpacity>
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
        width: 120,
        resizeMode: "contain",
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#33058d"
    },
    formContainer: {
        flex: 1,
        padding: 20,
    },
    input: {
        borderColor: "#000",
        borderWidth: 1,
        padding: 10,
        margin: 10,
        width: "100%",
    },
    button: {
        backgroundColor: "#33058d",
        padding: 10,
        margin: 10,
        width: "100%",
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
    },
    linkContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    link: {
        color: "#33058d",
        textAlign: "center",
    },
})
export default LoginScreen
