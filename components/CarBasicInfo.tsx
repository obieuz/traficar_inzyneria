import {View, Text, Image, StyleSheet, Button, TouchableOpacity} from "react-native";
import {cars} from "@/assets/data";
import {background_color} from "@/assets/colors";
import {useRouter} from "expo-router";

export default function CarBasicInfo({carId,setShowDetails})
{
    const router = useRouter();
    const car = cars.find(car => car.id === Number(carId));
    return (
        <View style={styles.component}>
            <View>
                <TouchableOpacity
                    onPress={() => setShowDetails(false)}
                    style={styles.close_button_container}
                >
                    <Image source={require("@/assets/images/icons/close_icon.png")} style={{width:32,height:32}}/>
                </TouchableOpacity>
            </View>
        {car && <View>
            <View style={styles.row}>
                <Image source={car.img} style={styles.image}/>
                <View style={styles.text_in_row}>
                    <Text style={styles.text_to_right}>{car.manufacturer} {car.model}</Text>
                    <Text style={styles.text_to_right}>{car.price}</Text>
                </View>
            </View>
            <Button title={"See details"}
                onPress={()=>router.push({pathname:"car_details",params:{carId:car?.id}})}
            />
            <Button title={"Order"}
                    onPress={()=>router.push({pathname:"order",params:{carId:car?.id}})}
                    />
        </View>
        }
        </View>
    );
}

const styles = StyleSheet.create({
    row:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    image:{
        width: 128,
        height: 128,
        objectFit:"contain"
    },
    text_in_row : {
      marginLeft:"auto",
        marginRight:0,
    },
    text_to_right:{
        fontSize:24,
        textAlign:"right"
    },
    component:{
        backgroundColor:background_color,
        position:"absolute",
        width:"100%",
        left:0,
        right:0,
        bottom:0,
        zIndex:2,
    },
    close_button_container:{
        width:"auto",
        marginLeft:"auto",
        marginRight:0,
    }
})