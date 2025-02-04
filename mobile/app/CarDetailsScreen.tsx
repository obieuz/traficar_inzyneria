import {View, Text, Image, StyleSheet, ScrollView, Button, TouchableOpacity} from "react-native";
import {cars} from "@/assets/data";
import {useLocalSearchParams, useSearchParams} from "expo-router/build/hooks";
import {useRouter} from "expo-router";
import MapView, {Marker} from "react-native-maps";
import { location_key } from "@/functions/keys";
import {getData} from "@/functions/storage";
import {UserMarker} from "@/components/UserMarker";
import {useEffect, useState} from "react";
import {OrderScreen_route} from "@/assets/routes";
import {background_color, secondary_color} from "@/assets/colors";
import {HorizontalLine} from "@/components/HorizontalLine";
import Svg, {Path} from "react-native-svg";
import {MileageIcon} from "@/components/SVG/MileageIcon";
import {FuelTypeIcon} from "@/components/SVG/FuelTypeIcon";
import {GearBoxIcon} from "@/components/SVG/GearBoxIcon";
import {PowerIcon} from "@/components/SVG/PowerIcon";
import {YearIcon} from "@/components/SVG/YearIcon";
import {CubicCapacityIcon} from "@/components/SVG/CubicCapacityIcon";

export default function CarDetailsScreen() {
    const {carId} = useLocalSearchParams();
    const car = cars.find(car => car.id === Number(carId));
    const [location, setLocation] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const storedLocation = await getData(location_key);
                if (storedLocation) {
                    setLocation(JSON.parse(storedLocation));
                }
            } catch (error) {
                console.error("Error fetching location:", error);
            }
        };

        fetchLocation();
    }, []);

return (
        <ScrollView>
            {car && <MapView
                initialRegion={{
                    latitude: Number(car.latitude),
                    longitude: Number(car.longitude),
                    latitudeDelta: 0.00922,
                    longitudeDelta: 0.00421,
                }}
                style={styles.map}
            >

                <Marker
                    coordinate={{
                        latitude: Number(car.latitude),
                        longitude: Number(car.longitude),
                    }}
                    title={`${car.manufacturer} ${car.model}`}
                >
                    <Image source={car?.img} style={{width: 32, height: 32}}/>
                </Marker>

                {location && <UserMarker
                    longitude={location.coords.longitude}
                    latitude={location.coords.latitude}
                />}

            </MapView>}
            <View style={styles.container}>
                <Image source={car?.img} style={styles.image}/>
                <Text style={styles.header}>
                    {car?.manufacturer} {car?.model}
                </Text>
                <Text>
                    {car?.price} zł/km
                </Text>
                <TouchableOpacity style={styles.button_container} onPress={
                    () => router.push({pathname: OrderScreen_route})
                }>
                    <Text style={styles.button_text}>ORDER</Text>
                </TouchableOpacity>

                <HorizontalLine/>

                <Text style={styles.h1_text}>
                    Most important
                </Text>

                <View style={styles.description_container}>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <MileageIcon/>
                            <Text style={styles.secondary_text}>Mileage</Text>
                            <Text>{car?.mileage} km</Text>
                        </View>
                        <View style={styles.column}>
                            <FuelTypeIcon/>
                            <Text style={styles.secondary_text}>Fuel type</Text>
                            <Text>{car?.fuel_type}</Text>
                        </View>
                        <View style={styles.column}>
                            <GearBoxIcon/>
                            <Text style={styles.secondary_text}>Gearbox type</Text>
                            <Text>{car?.gearbox}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <CubicCapacityIcon/>
                            <Text style={styles.secondary_text}>Cubic capacity</Text>
                            <Text>{car?.cubic_capacity} cm3</Text>
                        </View>
                        <View style={styles.column}>
                            <YearIcon/>
                            <Text style={styles.secondary_text}>Year</Text>
                            <Text>{car?.year}</Text>
                        </View>
                        <View style={styles.column}>
                            <PowerIcon/>
                            <Text style={styles.secondary_text}>Horsepower</Text>
                            <Text>{car?.horse_power} KM</Text>
                        </View>
                    </View>
                </View>

                <HorizontalLine/>

                <View>
                    <Text style={styles.h1_text}>
                        Details
                    </Text>
                </View>

                <View style={styles.details_row}>
                    <Text style={styles.details_text_first}>
                        Manufacturer
                    </Text>
                    <Text style={styles.details_text}>
                        {car?.manufacturer}
                    </Text>
                </View>
                <View style={styles.details_row}>
                    <Text style={styles.details_text_first}>
                        Model
                    </Text>
                    <Text style={styles.details_text}>
                        {car?.model}
                    </Text>
                </View>
                <View style={styles.details_row}>
                    <Text style={styles.details_text_first}>
                        Cena
                    </Text>
                    <Text style={styles.details_text}>
                        {car?.price} zł/km
                    </Text>
                </View>
                <View style={styles.details_row}>
                    <Text style={styles.details_text_first}>
                        Number of doors
                    </Text>
                    <Text style={styles.details_text}>
                        {car?.number_of_doors}
                    </Text>
                </View>
                <View style={styles.details_row}>
                    <Text style={styles.details_text_first}>
                        Number of seats
                    </Text>
                    <Text style={styles.details_text}>
                        {car?.number_of_seats}
                    </Text>
                </View>
                <View style={styles.details_row}>
                    <Text style={styles.details_text_first}>
                        Color
                    </Text>
                    <Text style={styles.details_text}>
                        {car?.color}
                    </Text>
                </View>

            </View>

        </ScrollView>
);

}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: 300,
    },
    image: {
        width: "100%",
        height: 150,
        objectFit: "contain",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
    },
    h1_text: {
        fontSize:20,
        fontWeight:"bold",
    },
    container:{
        marginTop:20,
        paddingLeft : 10,
        paddingRight : 10,
    },
    button_container:{
        backgroundColor:background_color,
        padding:10,
        marginTop:10,
        marginBottom:10,
    },
    button_text:{
        color:"white",
        textAlign:"center",
    },
    description_container:{
        flex:1,
        padding:10,
    },
    row:{
        flexDirection: 'row',
        marginBottom: 10,
    },
    column:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    secondary_text:{
        color:"grey",
    },
    details_row:{
        flexDirection: 'row',
        width: "100%",
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomColor: secondary_color,
        borderBottomWidth: 1,
    },
    details_text_first:{
        width: "50%",
        fontSize: 16,
        color: "grey",
    },
    details_text:{
        width: "50%",
        fontSize: 16,
    }
})