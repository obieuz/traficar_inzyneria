import {TouchableOpacity,Image} from "react-native";

export const Clickable_Icon = ({path_to_icon_img,onPress,style})=>{

    return(
        // w react native nie mozesz dac onPress czyli onClick na View wiec dlatego jest TouchableOpacity
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