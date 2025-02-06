


import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "../assets/styles"; // Dodaj ten import
import LoginScreen from "./LoginScreen"; // Dodaj ten import
import RegisterScreen from "./RegisterScreen"; // Dodaj ten import
import MapScreen from "./MapScreen";
import {MapScreen_route} from "@/assets/routes"; // Dodaj ten import

export default function Index() {
const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>BUZAJ</Text>
                <Text style={styles.subtitle}>car rental</Text>
                <Text style={styles.priceOld}>2.50 zł/km</Text>
                <Text style={styles.priceNew}>1.59 zł/km</Text>
                <Text style={styles.description}>Najniższa cena, najwyższa jakość xd</Text>
            </View>

            <View style={styles.buttonContainer}>


                {/*<TouchableOpacity*/}
                {/*    style={styles.createAccountButton}*/}
                {/*    onPress={() => router.push("RegisterScreen")}*/}
                {/*>*/}
                {/*    <Text style={styles.createAccountText}>Stwórz konto</Text>*/}
                {/*</TouchableOpacity>*/}
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => router.push("LoginScreen")}
                >
                    <Text style={styles.loginText}>Zaloguj się</Text>
                </TouchableOpacity>
            </View>

            {/*<View style={styles.buttonContainer2}>*/}
            {/*    /!*<TouchableOpacity*!/*/}
            {/*    /!*    style={styles.demobutton}*!/*/}
            {/*    /!*    onPress={() => router.push(MapScreen_route)}*!/*/}
            {/*    /!*>*!/*/}
            {/*    /!*    <Text style={styles.demobuttonText}>Demo</Text>*!/*/}
            {/*    /!*</TouchableOpacity> // skip logowania i rejestracji, przzechodzi do Cars.tsx*!/*/}
            {/*</View>*/}
        </View>
    );
};

