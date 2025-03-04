import {useEffect, useState} from "react";
import {getData, storeData} from "@/functions/storage";
import {token_key} from "@/functions/keys";
import {laptop_ip_v4} from "@/assets/constants";
import {useRouter} from "expo-router";
import {LoginScreen_route} from "@/assets/routes";
import {Car} from "@/assets/types";
import {useStore} from "@/assets/store";

export default function useCars() {
    let router = useRouter();
    const {setStoreCars} = useStore();
    const [cars, setCars] = useState<Car[]>([]);
    useEffect(() => {
        (async () => {
            let token = await getData(token_key);
            console.log(token);
            let response = await fetch("http://"+laptop_ip_v4+":3000/cars/",{
                headers:{
                    "Authorization":token,
                }
            });
            let cars_from_request = await response.json();
            if(response.status !== 200){
                await storeData(token_key,"not valid");
                console.log("Error while fetching cars");
                router.push(LoginScreen_route);
                return;
            }
            let result = cars_from_request.result;
            if(result == null) {
                return;
            }
            setCars(result);
            setStoreCars(result)
        })();
    }, []);
    return cars;

}