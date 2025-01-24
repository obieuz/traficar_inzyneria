import {Car, MenuItem} from "@/assets/types";

export const cars:Car[] = [
    {
        id: 1,
        model: "RS6 AVANT",
        manufacturer: "Audi",
        img: require("./images/cars/audi_rs6.png"),
        img_require : require("./images/cars/audi_rs6.png"),
        latitude : "54.353306",
        longitude : "18.652556",
        available : false,
        price: 4.19,
    },
    {
        id: 2,
        model: "E90",
        manufacturer: "BMW",
        img: require("./images/cars/bmw_e90.png"),
        img_require : require("./images/cars/bmw_e90.png"),
        latitude : "54.354139",
        longitude : "18.656167",
        available: true,
        price: 3.49,
    }
]

export const menuItems:MenuItem[] = [
    {
        id:1,
        text:"Orders",
        page_to_navigate:"/index",
        icon: require("./images/icons/close_icon.png")
    },
    {
        id:2,
        text:"back_to_home",
        page_to_navigate:"/index.tsx",
        icon: require("./images/icons/close_icon.png")
    }
]