import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "../assets/styles";
import {users} from "../assets/data";
import {useRouter} from "expo-router";
import {MapScreen_route} from "@/assets/routes";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();


    return (
        <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Logowanie</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Hasło"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.submitButton} onPress={
                () => {
                    const user = users.find(user => user.login === email && user.password === password);
                    if (user) {
                        router.push(MapScreen_route);
                    }
                }
            }>
                <Text style={styles.submitButtonText}>Zaloguj się</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;