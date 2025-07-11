import Svg, {Path} from "react-native-svg";
import {icon_color, icon_height, icon_width} from "@/assets/styles";

export const GearBoxIcon = ()=> (
    <Svg xmlns="http://www.w3.org/2000/svg" width={icon_width} height={icon_height} fill="none" viewBox="0 0 24 24" role="img"
         >
        <Path fill={icon_color} fill-rule="evenodd"
              d="M21 4a2 2 0 0 0-4 0c0 .738.405 1.376 1 1.723v4.863l-.414.414H13V5.745A1.991 1.991 0 0 0 14.042 4a2 2 0 0 0-4 0c0 .721.385 1.348.958 1.7V11H6V5.723A1.994 1.994 0 0 0 5 2a1.994 1.994 0 0 0-1 3.723v12.554c-.595.347-1 .984-1 1.723a2 2 0 0 0 4 0c0-.739-.405-1.376-1-1.723V13h5v5.3a1.99 1.99 0 0 0-.958 1.7 2 2 0 0 0 4 0A1.99 1.99 0 0 0 13 18.255V13h5.414L20 11.414V5.723c.595-.347 1-.985 1-1.723Z"
              clip-rule="evenodd"></Path>
    </Svg>
)