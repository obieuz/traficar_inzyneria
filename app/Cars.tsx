import {Car} from "@/assets/types";
import {StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
import {cars} from "@/assets/data";
import {useRouter} from "expo-router";
import MapView, {Marker} from "react-native-maps";
import useUserLocation from "@/hooks/useUserLocation";
import {useEffect, useState} from "react";
import CarBasicInfo from "@/components/CarBasicInfo";
import {Icon} from "@/components/Icon";



export default function Cars() {
    let router = useRouter();
    let {location,errorMsg,refresh,setRefresh}=useUserLocation();
    const[carId,setCarId]=useState<number|null>(null);
    const[showDetails, setShowDetails]=useState<boolean>(false);


    const [region, setRegion] = useState({
        //kordy lacznosci jako poczatkowe
        latitude: 54.353306,
        longitude: 18.652556,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    useEffect(() => {
        if(location == null) {
            return;
        }

        setRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        })


    }, [location]);

    return (
        <View style={style.page}>

            <Icon
                path_to_icon_img={require("@/assets/images/icons/localization_user_icon.png")}
                onPress={()=>{
                    setRefresh(refresh+1);
                }}
                style={localization_icon_style}
            />

            <MapView
                style={style.map}
                region={region}
            >
                {location && <Marker
                    coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude,
                    }}
                    title="Your Location"
                >
                    <Image source={require("../assets/images/icons/user_location_icon.png")} style={{objectFit:"contain"}}/>
                </Marker>
                }


                {cars.map((car:Car) => {
                    return <Marker
                        key={car.id}
                        coordinate={{
                            latitude: Number(car.latitude),
                            longitude: Number(car.longitude),
                        }}
                        title={`${car.manufacturer} ${car.model}`}
                        onPress={()=>{
                            setCarId(car.id);
                            setShowDetails(true)
                        }}
                    >
                        <Image source={car.img} style={{width: 32, height: 32}}/>
                    </Marker>
                })}

            </MapView>

            {showDetails && <CarBasicInfo carId={carId} setShowDetails={setShowDetails}/>}

        </View>
    );
}

const style = StyleSheet.create({
    page:{
        position:"relative",
        width:"100%",
        display:"flex",
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

const localization_icon_style = StyleSheet.create({
    container:{
        position:"absolute",
        left:10,
        bottom:10,
        zIndex:1,
    },
    image:{
        width: 32,
        height: 32,
    }
})