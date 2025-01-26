import {ImageSourcePropType,ImageRequireSource} from "react-native";

export type Car = {
    id: number;
    model: string;
    manufacturer: string;
    img: ImageSourcePropType;
    latitude : string;
    range : number;
    available : boolean;
    longitude : string;
    price: number;
    horse_power: number;
    fuel_type: string;
    gearbox: string;
    mileage: number;
    color: string;
    year: number;
    registration_number: string;
    number_of_seats: number;
    number_of_doors: number;
    cubic_capacity: number;
    };

export type MenuItem = {
    id:number;
    text: string;
    page_to_navigate: string;
    icon: ImageSourcePropType;
}