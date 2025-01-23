import {ImageSourcePropType,ImageRequireSource} from "react-native";

export type Car = {
    id: number;
    model: string;
    manufacturer: string;
    img: ImageSourcePropType;
    img_require : ImageRequireSource;
    latitude : string;
    longitude : string;
    price: number;
    };