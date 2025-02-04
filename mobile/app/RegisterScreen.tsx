import React, { useState } from "react";
import styles from "@/assets/styles";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";

const RegisterScreen = () => {
    const [form, setForm] = useState({
        email: "",
        username: "",
        password: "",
        birthDate: "",
        idNumber: "",
        licenseNumber: "",
        licenseIssueDate: "",
        address: "",
        phone: "",
    });

    const handleChange = (key, value) => {
        setForm({ ...form, [key]: value });
    };

    return (
        <ScrollView contentContainerStyle={styles.formContainer}>
            <Text style={styles.formTitle}>Rejestracja</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={form.email}
                onChangeText={(text) => handleChange("email", text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Nazwa użytkownika"
                value={form.username}
                onChangeText={(text) => handleChange("username", text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Hasło"
                secureTextEntry
                value={form.password}
                onChangeText={(text) => handleChange("password", text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Data urodzenia"
                value={form.birthDate}
                onChangeText={(text) => handleChange("birthDate", text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Numer dowodu"
                value={form.idNumber}
                onChangeText={(text) => handleChange("idNumber", text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Numer prawa jazdy"
                value={form.licenseNumber}
                onChangeText={(text) => handleChange("licenseNumber", text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Data wydania prawa jazdy"
                value={form.licenseIssueDate}
                onChangeText={(text) => handleChange("licenseIssueDate", text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Adres"
                value={form.address}
                onChangeText={(text) => handleChange("address", text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Telefon"
                value={form.phone}
                onChangeText={(text) => handleChange("phone", text)}
            />
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Zarejestruj się</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default RegisterScreen;