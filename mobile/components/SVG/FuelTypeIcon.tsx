import Svg, {Path} from "react-native-svg";
import {icon_color, icon_height, icon_width} from "@/assets/styles";

export const FuelTypeIcon = ()=> (
    <Svg xmlns="http://www.w3.org/2000/svg" width={icon_width} height={icon_height} fill="none" viewBox="0 0 24 24" role="img">
        <Path fill={icon_color} d="M10.997 9H6V5h4.997v4Z"></Path>
        <Path fill={icon_color} fill-rule="evenodd"
              d="M16 3.042h3.408L22 5.579v13.422C22 20.206 21.201 22 19 22c-2.2 0-3-1.794-3-3v-6c0-.806-.55-.989-1.011-1H14v10H3V3.001l1-1h9l1 1V10h1c1.206 0 3 .799 3 3v6c.012.449.195 1 1 1 .806 0 .988-.55 1-1.011V6.421l-1.408-1.379H16l-1-1.041 1-.959ZM12 20H5V4.001h7V20Z"
              clip-rule="evenodd"></Path>
    </Svg>
)