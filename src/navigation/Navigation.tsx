import { createStackNavigator } from "@react-navigation/stack";
import { containsOnlyNumbers } from "../logic/functions";
import BarCodeScreen from "../screens/BarCodeScreen";
import ProductView from "../screens/ProductView";

export default function Navigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="BarCodeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BarCodeScreen" component={BarCodeScreen} />
      <Stack.Screen
        name="ProductView"
        component={ProductView}
        options={({ route }) => ({
          headerShown: true,
          headerTitle: containsOnlyNumbers(route?.params?.productCode)
            ? route?.params?.productCode
            : "Barkod jo-valid",
        })}
      />
    </Stack.Navigator>
  );
}
