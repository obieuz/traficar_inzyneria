import {useEffect, useState} from "react";
import * as Location from "expo-location";
import { LocationObject } from "expo-location";

export default function useUserLocation()
{
    const [location, setLocation] = useState<LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [refresh,setRefresh] = useState(0);
    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({})
            setLocation(location);
        })();
    }, [refresh]);
    return {location, errorMsg,refresh, setRefresh};
}