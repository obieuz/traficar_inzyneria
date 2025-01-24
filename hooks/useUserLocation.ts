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
            //czeka na permisje odnosnie lokalizacji
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            //bierze aktualna lokalizacje
            let location = await Location.getCurrentPositionAsync({})
            setLocation(location);
        })();
        //use effect zalezy od refresh, wiec jak refresh sie zmieni to useEffect zostanie wykonany ponownie
    }, [refresh]);
    return {location, errorMsg,refresh, setRefresh};
}