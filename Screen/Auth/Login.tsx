/**
 * Page de login comprenant une image, deux champs de texte, un bouton de connexion et un lien vers la page d'inscription
 */

import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Alert, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import Input from "../../Component/Form/Input"
import Button from "../../Component/Form/Button"
import type { AuthStackParamList } from "../../Navigator/Auth"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { isEmail, isNotEmpty } from "../../Utils/Form"

type LoginScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList>

const LoginScreen = () => {
    const navigation = useNavigation<LoginScreenNavigationProp>()
    const [email, setEmail] = React.useState<string>("")
    const [password, setPassword] = React.useState<string>("")
    const [errorEmail, setErrorEmail] = React.useState<string | undefined>(undefined)
    const [errorPassword, setErrorPassword] = React.useState<string | undefined>(undefined)

    const onPasswordBlur = () => {
        setErrorPassword(isNotEmpty(password) ? undefined : "Le mot de passe est vide")
    }
    const onEmailBlur = () => {
        setErrorEmail(isNotEmpty(email) ? undefined : "L'email est vide")
        if (email == undefined) {
            setErrorEmail(isEmail(email) ? undefined : "L'email n'est pas valide")
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formContainer}>
                <Input placeholder="Email" onChangeText={(text) => { setEmail(text) }} value={email} type="email" error={errorEmail} onBlur={() => onEmailBlur()} />
                <Input placeholder="Mot de passe" onChangeText={(text) => { setPassword(text) }} value={password} type="password" onBlur={() => onPasswordBlur()} error={errorPassword} />
                <Button title="Se connecter" type="primary" onPress={() => { Alert.alert("Bienvenue sur notre super application") }} />
            </View>
            <View style={styles.linkContainer}>
                <TouchableOpacity onPress={() => { navigation.navigate("SignUpStep1") }}>
                    <Text style={styles.link}>S'inscrire</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
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
