import {View, Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import {useRouter} from "expo-router";

export const MenuListItem = ({icon,text,page_to_navigate})=>{
    const router = useRouter();

    return(
        <TouchableOpacity
            style={style.menu_item}
            onPress={()=>router.push(page_to_navigate)}
        >
            <Image
                source = {icon}
                style = {style.image}
            />
            <Text
                style={style.text}
            >
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    menu_item:{
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
    },
    text:{
        paddingLeft:10,
        fontSize:24,
    },
    image:{
        width:16,
        height:16,
        objectFit:"contain",
    }

})