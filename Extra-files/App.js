import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigation } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const BottomTap = createBottomTabNavigation();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTap.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a6b" },
          color: "white",
          tabBarActiveTintColor: "#3c0a6b",
        }}
      >
        <BottomTap.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            topBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTap.Screen
          name="User"
          component={UserScreen}
          options={{
            topBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </BottomTap.Navigator>
    </NavigationContainer>
  );
}
