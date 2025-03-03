import {useEffect, useState} from "react";
import {Region} from "@/assets/types";
import {getData, storeData} from "@/functions/storage";
import {token_key} from "@/functions/keys";
import {laptop_ip_v4} from "@/assets/constants";
import {useRouter} from "expo-router";
import loginScreen from "@/app/LoginScreen";
import {LoginScreen_route} from "@/assets/routes";

export default function useRegions() {
    let router = useRouter();
    const [regions, setRegions] = useState<Region[]>([]);
    useEffect(() => {
        (async () => {
            let token = await getData(token_key);
            console.log(token);
            let response = await fetch("http://"+laptop_ip_v4+":3000/regions/",{
                headers:{
                    "Authorization":token,
                }
            });
            let regions = await response.json();
            if(response.status !== 200){
                await storeData(token_key,"not valid");
                console.log("Error while fetching regions");
                router.push(LoginScreen_route);
                return;
            }
            console.log(regions)
            if(regions.result == null) {
                return;
            }
            console.log(regions.result);
            setRegions(regions.result);
        })();
    }, []);
    return regions;

}