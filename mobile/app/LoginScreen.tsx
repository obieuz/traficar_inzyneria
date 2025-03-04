import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "../assets/styles";
import {useRouter} from "expo-router";
import {MapScreen_route} from "@/assets/routes";
import {token_key} from "@/functions/keys";
import {laptop_ip_v4} from "@/assets/constants";
import {getData, storeData} from "@/functions/storage";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    useEffect(() => {
        (async () => {
            let token = await getData(token_key);
            if(token != null && token != "not valid"){
                router.push(MapScreen_route);
            }
        });
    }, []);


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
                async () => {
                    console.log("logowanie")
                    let response = await fetch("http://"+laptop_ip_v4+":3000/users/token",{
                        method:"POST",
                        body:JSON.stringify({
                            login:email,
                            password:password
                        }),
                        headers:{
                            "Content-Type":"application/json"
                        }
                    }).then(response => response.json());

                    if(response.token != null) {
                        await storeData(token_key, response.token);
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