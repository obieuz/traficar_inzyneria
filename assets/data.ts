import {Car, MenuItem} from "@/assets/types";
import index from "@/pages/index";;

export const cars:Car[] = [
    {
        id: 1,
        model: "RS6 AVANT",
        manufacturer: "Audi",
        img: require("./images/cars/audi_rs6.png"),
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
        page_to_navigate:"/index",
        icon: require("./images/icons/close_icon.png")
    },
    {
        id:3,
        text:"Portfel",
        page_to_navigate:"/wallet",
        icon: require("./images/icons/settings.png")
    },
    {
        id:4,
        text:"Historia przejazdów",
        page_to_navigate:"/history",
        icon: require("./images/icons/history.png")
    },
    {
        id:5,
        text:"Ustawienia",
        page_to_navigate:"/settings",
        icon: require("./images/icons/settings.png")
    },
    {
        id:6,
        text:"Pomoc",
        page_to_navigate:"/help",
        icon: require("./images/icons/help.png")
    },
    {
        id:7,
        text:"Wyloguj",
        page_to_navigate:"/logout",
        icon: require("./images/icons/close_icon.png")
    }
]