import {ImageSourcePropType,ImageRequireSource} from "react-native";

export type Car = {
    id: number;
    model: string;
    manufacturer: string;
    img: ImageSourcePropType;
    img_require : ImageRequireSource;
    latitude : string;
    available : boolean;
    longitude : string;
    price: number;
    };