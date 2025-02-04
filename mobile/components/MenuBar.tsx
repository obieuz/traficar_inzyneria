import {View,Text,TouchableOpacity,StyleSheet} from "react-native";
import {MenuListItem} from "@/components/MenuListItem";
import {menuItems} from "@/assets/data";
import {MenuItem} from "@/assets/types";
import {background_color} from "@/assets/colors";

export const MenuBar = ()=> {
    return(
        <View style={style.menu_bar}>
            {menuItems.map((item:MenuItem)=>(
                <MenuListItem
                    icon={item.icon}
                    text={item.text}
                    key={item.id}
                    page_to_navigate={item.page_to_navigate}
                />
            ))}
        </View>
    )
}

// @ts-ignore
const style = StyleSheet.create({
    menu_bar:{
        backgroundColor:background_color,
        position:"absolute",
        paddingTop:10,
        paddingLeft:10,
        zIndex:3,
        left:0,
        height:"100%",
        width:"80%",
        top:0,
        transition:"0.5s",
    }
})