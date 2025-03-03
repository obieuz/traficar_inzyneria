import {Car, Region} from "@/assets/types";
import {StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
import {useRouter} from "expo-router";
import MapView, {Marker} from "react-native-maps";
import useUserLocation from "@/hooks/useUserLocation";
import {useEffect, useState} from "react";
import CarBasicInfo from "@/components/CarBasicInfo";
import {Clickable_Icon} from "@/components/Clickable_Icon";
import {MenuBar} from "@/components/MenuBar";
import {UserMarker} from "@/components/UserMarker";
import {laptop_ip_v4, zoomLevel_barrier} from "@/assets/constants";
import {getData} from "@/functions/storage";
import {token_key} from "@/functions/keys";
import {LoginScreen_route} from "@/assets/routes";
import useRegions from "@/hooks/useRegions";

async function getToken(){
    return await getData(token_key);
}

export default function MapScreen() {
    let router = useRouter();
    let {location,errorMsg,refresh,setRefresh}=useUserLocation();
    const[carId,setCarId]=useState<number|null>(null);
    const[showDetails, setShowDetails]=useState<boolean>(false);
    const[showMenu, setShowMenu]=useState<boolean>(false);
    const[zoomLevel,setZoomLevel]=useState<number>(0);
    let regions = useRegions();
    const[cars,setCars]=useState<Car[]>([]);

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
        });
    }, [location]);

    const calculateZoomLevel = (latitudeDelta: number) => {
        return Math.round(Math.log(360 / latitudeDelta) / Math.LN2);
    };

    return (
        <View style={style.page}>
            {/* jezeli showMenu rowna sie true, wtedy i tylko wtedy pokazuje sie MenuBar*/}
            {showMenu && <MenuBar/>}

            <Clickable_Icon
                path_to_icon_img={require("@/assets/images/icons/user_location_icon.png")}
                onPress={()=>{
                    setRefresh(refresh+1);
                }}
                style={localization_icon_style}
            />

            <Clickable_Icon
                path_to_icon_img={require("@/assets/images/icons/ham_menu_icon.png")}
                onPress={()=>{
                    setShowMenu(!showMenu)
                }}
                style={menu_icon_style}
            />

            <MapView
                style={style.map}
                region={region}
                onPress={()=>{
                    setShowMenu(false);
                    setShowDetails(false);
                    }
                }
                onRegionChangeComplete={async (region) => {
                    setZoomLevel(calculateZoomLevel(region.latitudeDelta));
                }}
            >
                {/*location na poczatku jest null wiec bylby blad gdybym probowal cos z nia robic, wiec tylko gdy location bedzie istniala wyswitli mi lokalizacje usera*/}
                {location && <UserMarker
                    latitude={region.latitude}
                    longitude={region.longitude}
                />
                }

                { (regions && zoomLevel < zoomLevel_barrier) && regions.map((reg) => {
                    return <Marker
                        key={reg.regionid}
                        coordinate={{
                            latitude: parseFloat(reg.latitude),
                            longitude: parseFloat(reg.longitude),
                        }}
                    >
                        <View style={licznik_style.container}>
                            <Text style={licznik_style.text}>{reg.carids.length}</Text>
                        </View>
                    </Marker>
                })}


                {/*dla kazdego samochodu tworzy sie Marker czyli znacznik na mapie*/}
                {zoomLevel >= zoomLevel_barrier && cars.map((car:Car) => {
                    return <Marker
                        key={car.id}
                        coordinate={{
                            latitude: Number(car.latitude),
                            longitude: Number(car.longitude),
                        }}
                        title={`${car.manufacturer} ${car.model}`}
                        onPress={()=>{
                            //to sa huki do komponentu carbasicinfo, carid aby wiedzialo ktory, showdetails zeby pokazywalo wtedy tylko user kliknie
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

const menu_icon_style = StyleSheet.create({
    container:{
        position:"absolute",
        left:10,
        top:0,
        zIndex:2,
    },
    image:{
        width: 32,
        height: 32,
    }
})

const licznik_style = StyleSheet.create({
    container:{
        backgroundColor:"white",
        borderRadius:"50%",
        width:32,
        height:32,
        position:"relative"
    },
    text:{
        color:"black",
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
    }
})