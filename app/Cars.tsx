import {Car} from "@/assets/types";
import {StyleSheet, View, Image, Text} from "react-native";
import {cars} from "@/assets/data";

export default function Cars({navigation}) {

    return (
        <View style={style.page}>
            {cars.map((car: Car) => (
                <View key={car.id} style={style.car_row}>
                    <Image source={car.img} style={style.car_image}/>

                    <View style={style.car_text}>
                        <Text>{car.manufacturer} {car.model}</Text>
                        <Text>{car.price}</Text>
                    </View>
                </View>
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
        padding:10,
    },
    car_image:{
        width:100,
        height:100
    },
    car_text:{
        display:"flex",
        padding:5,
    }
})