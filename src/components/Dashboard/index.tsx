import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "..";

const Tab = createBottomTabNavigator()

const Dashboard: React.FC = () => (
     <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Profile' component={Home} />
            <Tab.Screen name='Preferences' component={Home} />
            <Tab.Screen name='Contact' component={Home} />    
    </Tab.Navigator>
)

export default Dashboard