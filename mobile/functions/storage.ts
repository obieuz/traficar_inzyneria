// Function to store data
import AsyncStorage from "@react-native-async-storage/async-storage";

// funkcja do zapisywania danych, dajesz klucz i wartosc
export const storeData = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        // saving error
        console.error(e);
    }
};

// Funkcja do pobierania danych (dajesz klucz i sigma)
export const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        }
    } catch (e) {
        // reading error
        console.error(e);
    }
};