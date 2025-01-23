import {Car} from "@/assets/types";

export const cars:Car[] = [
    {
        id: 1,
        model: "RS6 AVANT",
        manufacturer: "Audi",
        img: require("../assets/images/audi_rs6.png"),
        img_require : require("../assets/images/audi_rs6.png"),
        latitude : "54.353306",
        longitude : "18.652556",
        price: 200,
    },
    {
        id: 2,
        model: "E90",
        manufacturer: "BMW",
        img: require("../assets/images/bmw_e90.png"),
        img_require : require("../assets/images/bmw_e90.png"),
        latitude : "54.354139",
        longitude : "18.656167",
        price: 100,
    }
]