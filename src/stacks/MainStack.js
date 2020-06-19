import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "../screens/IndexScreen";
import ShowScreen from "../screens/ShowScreen";
import CreateScreen from "../screens/CreateScreen";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import EditScreen from "../screens/EditScreen";

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={IndexScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Create")}>
              <AntDesign
                style={{ marginRight: 10 }}
                name="plus"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Show"
        component={ShowScreen}
        options={({ navigation, route }) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                const { id } = route.params;
                navigation.navigate("Edit", { id: id });
              }}
            >
              <Entypo
                style={{ marginRight: 10 }}
                name="edit"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Create" component={CreateScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
    </Stack.Navigator>
  );
}

export default MainStack;
