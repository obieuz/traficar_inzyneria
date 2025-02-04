import {View,StyleSheet} from "react-native";
import {secondary_color} from "@/assets/colors";

export const HorizontalLine = () => {
    return (
        <View style={style.horizontal_line}/>
    )
}
const style = StyleSheet.create({
  horizontal_line:{
      marginTop: 10,
      marginBottom: 10,
      borderBottomColor: secondary_color,
      borderBottomWidth: 1,
      width: '100%'
  }
})