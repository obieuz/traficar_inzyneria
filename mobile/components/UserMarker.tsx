import {Marker} from "react-native-maps";
import {Image} from "react-native";

export const UserMarker = ({latitude, longitude}) => {
    return (
        <Marker
            coordinate={{
                latitude: latitude,
                longitude: longitude,
            }}
            title={`Your location`}
        >
            <Image source={require("@/assets/images/icons/localization_user_icon.png")} style={{width: 32, height: 32}}/>
        </Marker>
    )
}