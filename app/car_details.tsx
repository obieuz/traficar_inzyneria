import {View,Text,Image,StyleSheet} from "react-native";
import {cars} from "@/assets/data";
import {useLocalSearchParams, useSearchParams} from "expo-router/build/hooks";
import {useRouter} from "expo-router";
import MapView, {Marker} from "react-native-maps";
export default function Car_details() {
    const {carId} = useLocalSearchParams();
    const car = cars.find(car => car.id === Number(carId));
return (
        <View>
            <MapView
                initialRegion={{
                    latitude: Number(car?.latitude),
                    longitude: Number(car?.longitude),
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                style={styles.map}
            >
                <Marker
                    coordinate={{
                        latitude: Number(car?.latitude),
                        longitude: Number(car?.longitude),
                    }}
                    title={`${car?.manufacturer} ${car?.model}`}
                >
                    <Image source={car?.img} style={{width: 32, height: 32}}/>
                </Marker>
            </MapView>
            <Text>Car details {carId}</Text>
            <Text>{car?.manufacturer} {car?.model}</Text>
            <Image source={car?.img}/>
        </View>
    );

}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '50%',
    }
})