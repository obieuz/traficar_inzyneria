import {Button, Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Cars from "./Cars";
import {useRouter} from "expo-router";


export default function Index() {
    const router = useRouter();

  return (
      <View>
          <Text>
              Dsidjiuwjda
          </Text>
          <Button
              title={"Cars"}
              onPress={()=>router.push("/Cars")}/>
      </View>
  );
}
