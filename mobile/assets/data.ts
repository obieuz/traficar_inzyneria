import {Car, MenuItem, Region, User} from "@/assets/types";

export const cars:Car[] = [
    {
        id: 1,
        model: "RS6 AVANT",
        manufacturer: "Audi",
        img: require("./images/cars/audi_rs6.png"),
        latitude : "54.353306",
        longitude : "18.652556",
        available : true,
        range: 500,
        price: 4.19,
        horse_power: 600,
        fuel_type: "petrol",
        gearbox: "automatic",
        mileage: 10000,
        color: "red",
        year: 2021,
        registration_number: "GDA12345",
        number_of_seats: 5,
        number_of_doors: 5,
        cubic_capacity: 3996,
    },
    {
        id: 2,
        model: "E90",
        manufacturer: "BMW",
        img: require("./images/cars/bmw_e90.png"),
        latitude : "54.354139",
        longitude : "18.656167",
        range : 200,
        available: true,
        price: 3.49,
        horse_power: 200,
        fuel_type: "diesel",
        gearbox: "manual",
        cubic_capacity: 1996,
        mileage: 200000,
        color: "blue",
        year: 2005,
        registration_number: "GDA54321",
        number_of_seats: 5,
        number_of_doors: 3,

    },
    {
        id: 3,
        model: "Urus",
        manufacturer: "Lamborghini",
        img: require("./images/cars/urus.png"),
        latitude : "54.518708",
        longitude : "18.556093",
        range : 300,
        available: true,
        price: 6.99,
        horse_power: 650,
        fuel_type: "petrol",
        gearbox: "automatic",
        cubic_capacity: 3996,
        mileage: 10000,
        color: "yellow",
        year: 2021,
        registration_number: "GDA67890",
        number_of_seats: 5,
        number_of_doors: 5,
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

export const regions : Region[] = [
    {
        id: 1,
        carIds: [1,2],
        latitude: 54.34,
        longitude: 18.638306,
    },
    {
        id: 2,
        carIds: [3],
        latitude: 54.518328,
        longitude: 18.529379,
    }
]

export const users:User []= [
    {
        id:0,
        name: "Robert",
        surname: "Zajac",
        history: [],
        login: "robzaj",
        password: "robzaj"
    },
    {
        id:1,
        name: "Kamil",
        surname: "Kowalski",
        history: [],
        login: "kamkow",
        password: "kamkow"
    }
]