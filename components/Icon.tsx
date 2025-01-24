import {TouchableOpacity,Image,StyleSheet} from "react-native";

export const Icon = ({path_to_icon_img,onPress,style})=>{

    return(
        <TouchableOpacity
            onPress={onPress}
            style={style.container}
        >
            <Image
                source={path_to_icon_img}
                style={style.image}
            />
        </TouchableOpacity>
    )
}