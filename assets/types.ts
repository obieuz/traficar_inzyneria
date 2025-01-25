import {ImageSourcePropType,ImageRequireSource} from "react-native";

export type Car = {
    id: number;
    model: string;
    manufacturer: string;
    img: ImageSourcePropType;
    latitude : string;
    available : boolean;
    longitude : string;
    price: number;
    };

export type MenuItem = {
    id:number;
    text: string;
    page_to_navigate: string;
    icon: ImageSourcePropType;
}