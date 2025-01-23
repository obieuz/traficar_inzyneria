import {Car} from "@/assets/types";
import {StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
import {cars} from "@/assets/data";
import {useRouter} from "expo-router";
import MapView, {Marker} from "react-native-maps";
import useUserLocation from "@/hooks/useUserLocation";
import {useEffect} from "react";



export default function Cars() {
    let router = useRouter();
    const {location,errorMsg}=useUserLocation();
    useEffect(() => {
        console.log(location)
    }, [location]);
    return (
        <View style={style.page}>
            {location && <MapView
                style={style.map}
                initialRegion={
                    {
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }
                }
            >
                <Marker
                    coordinate={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                    }}
                    title="Your Location"
                />

                {cars.map((car:Car) => {
                    return <Marker
                        key={car.id}
                        coordinate={{
                            latitude: Number(car.latitude),
                            longitude: Number(car.longitude),
                        }}
                        title={`${car.manufacturer} ${car.model}`}
                    >
                        <TouchableOpacity >
                            <Image source={car.img} style={{width: 32, height: 32}}/>
                        </TouchableOpacity>
                    </Marker>
                })}

            </MapView> }
        </View>
    );
}

const style = StyleSheet.create({
    page:{
        display:"flex",
        padding:10,
    },
    car_row:{
        display:"flex",
        flexDirection:"row",
        padding:10,
    },
    car_image:{
        width:100,
        height:100,
        objectFit:"contain"
    },
    car_text:{
        display:"flex",
        padding:5,
    },
    map:{
        width:"100%",
        height:"100%",
    }
})