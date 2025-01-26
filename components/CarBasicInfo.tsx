import {View, Text, Image, StyleSheet, Button, TouchableOpacity} from "react-native";
import {cars} from "@/assets/data";
import {background_color, secondary_color} from "@/assets/colors";
import {useRouter} from "expo-router";
import {Clickable_Icon} from "@/components/Clickable_Icon";
import {CarDetailsScreen_route} from "@/assets/routes";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCoins} from "@fortawesome/free-solid-svg-icons";
import {HorizontalLine} from "@/components/HorizontalLine";
import {PowerIcon} from "@/components/SVG/PowerIcon";
import {MileageIcon} from "@/components/SVG/MileageIcon";

export default function CarBasicInfo({carId})
{
    const router = useRouter();
    const car = cars.find(car => car.id === Number(carId));
    return (
        <View style={styles.component}>
            {car && <View>
                <Image source={car?.img} style={styles.image}/>
                <Text style={styles.header}>
                    {car?.manufacturer} {car?.model}
                </Text>

                <HorizontalLine/>

                <Text style={styles.h3_text}>
                    Basic information
                </Text>

                <View style={styles.description_container}>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <FontAwesomeIcon icon={faCoins} size={38} color={"black"} style={styles.margin_to_font_awesome} />
                            <Text>
                                Price
                            </Text>
                            <Text>
                                {car?.price} zł/km
                            </Text>
                        </View>
                        <View style={styles.column}>
                            <MileageIcon/>
                            <Text>
                                Range
                            </Text>
                            <Text>
                                {car?.range} km
                            </Text>
                        </View>
                        <View style={styles.column}>
                            <PowerIcon/>
                            <Text>
                                Horsepower
                            </Text>
                            <Text>
                                {car.horse_power} KM
                            </Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={styles.button_container}>
                    <Text style={styles.button_text}>SEE DETAILS</Text>
                </TouchableOpacity>

            </View>

            }
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
            fontSize: 24,
            fontWeight: "bold",
        textAlign:"right"
        },
    h3_text:{
        fontSize:20,
        fontWeight:"bold",
        color:"black",
    },
    image:{
        width: "100%",
        height: 128,
        objectFit:"contain"
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
    text_to_right:{
        fontSize:16,
        textAlign:"right",
        color:secondary_color,
    },
    margin_to_font_awesome:{
        marginTop: 11,
    },
    component:{
        backgroundColor:background_color,
        position:"absolute",
        width:"100%",
        padding:10,
        left:0,
        right:0,
        bottom:0,
        zIndex:2,
    },
    button_container:{
        marginTop:10,
        backgroundColor:"transparent",
        padding:10,
        width:"100%",
        borderColor:"black",
        borderWidth:1,
    },
    button_text:{
        color:"black",
        textAlign:"center",
        fontSize:16,
    }
})