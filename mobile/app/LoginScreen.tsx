import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "../assets/styles";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Zaloguj się</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;