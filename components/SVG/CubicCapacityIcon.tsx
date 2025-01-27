import Svg, {Path} from "react-native-svg";
import {icon_color, icon_height, icon_width} from "@/assets/styles";

export const CubicCapacityIcon = ()=> (
    <Svg xmlns="http://www.w3.org/2000/svg" width={icon_width} height={icon_height} fill="none" viewBox="0 0 24 24" role="img">
        <Path fill={icon_color} fill-rule="evenodd"
              d="M16 18H12.83l-2-2H8v-6h8v8Zm5-9-1 1v2.042h-2V9l-1-1h-4V6h2.5l1-1-1-1h-7l-1 1 1 1H11v2H7L6 9v3H4v-2L3 9l-1 1v6l1 1 1-1v-2h2v3l1 1h3l2 2h5l1-1v-5h2v2l1 1 1-1v-6l-1-1Z"
              clip-rule="evenodd"></Path>
    </Svg>
)