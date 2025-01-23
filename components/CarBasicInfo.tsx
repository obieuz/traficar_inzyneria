import {View,Text,Image,StyleSheet} from "react-native";
import {cars} from "@/assets/data";

export default function CarBasicInfo({carId})
{
    console.log("jestem")
    const car = cars.find(car => car.id === Number(carId));
    return (
        <View style={styles.component}>
            <Text>SIGMAAA</Text>
        {car && <View>
            <View style={styles.row}>
                <Image source={car.img} style={styles.image}/>
                <View>
                    <Text style={styles.text_to_right}>{car.manufacturer} {car.model}</Text>
                    <Text style={styles.text_to_right}>{car.price}</Text>
                </View>
            </View>
        </View>
        }
        </View>
    );
}

const styles = StyleSheet.create({
    row:{
        display:"flex",
        flexDirection:"row"
    },
    image:{
        width: 128,
        height: 128,
        objectFit:"contain"
    },
    text_to_right:{
        fontSize:24,
        textAlign:"right"
    },
    component:{
        backgroundColor:"white",
        position:"absolute",
        width:"100%",
        left:0,
        right:0,
        bottom:0,
        zIndex:1,
    }
})