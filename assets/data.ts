import {Car, MenuItem} from "@/assets/types";

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
    }
]