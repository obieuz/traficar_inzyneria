import {View, Text, Image, StyleSheet, Button} from "react-native";
import {cars} from "@/assets/data";
import {background_color} from "@/assets/colors";

export default function CarBasicInfo({carId,setShowDetails})
{
    const car = cars.find(car => car.id === Number(carId));
    return (
        <View style={styles.component}>
            <View>
                <Button title={""}
                        onPress={() => setShowDetails(false)}
                        >
                    <Image />
                </Button>
            </View>
        {car && <View>
            <View style={styles.row}>
                <Image source={car.img} style={styles.image}/>
                <View style={styles.text_in_row}>
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
        zIndex:1,
    }
})