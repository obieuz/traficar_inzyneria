import {Car} from "@/assets/types";
import {StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
import {cars} from "@/assets/data";
import {useRouter} from "expo-router";



export default function Cars() {
    let router = useRouter();

    return (
        <View style={style.page}>
            {cars.map((car: Car) => (
                <TouchableOpacity
                    key={car.id}
                    style={style.car_row}

                    onPress={()=>router.push({pathname:"/car_details", params : {carId: car.id}})}>
                    <Image source={car.img} style={style.car_image}/>r

                    <View style={style.car_text}>
                        <Text>{car.manufacturer} {car.model}</Text>
                        <Text>{car.price}zł/km</Text>
                    </View>
                </TouchableOpacity>
            ))}
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
    }
})