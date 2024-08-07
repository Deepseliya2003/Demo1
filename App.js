import React from "react";
import { SafeAreaView,View } from 'react-native';
import 'react-native-gesture-handler';
import { DrawerContent, createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import First from "./src/Screens/First";
import Second from "./src/Screens/Second";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Third from "./src/Screens/Third";

const Drawer = createDrawerNavigator();
const Stack=createNativeStackNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="First" component={First} options={{headerTitleAlign:'center',headerStyle:{backgroundColor:'pink'}}} 
       />
      <Drawer.Screen name="Second" component={Second} />
      <Drawer.Screen name="Third" component={Third} />

    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />

    </NavigationContainer>
  );
}

export default App;








