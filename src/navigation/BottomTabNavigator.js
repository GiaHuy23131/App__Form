import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
// Screens
import FormAll from '../screens/FormAll';
import Form from '../screens/Form';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Form" component={Form} options={{
                tabBarLabel: "Form",
                tabBarIcon: () => {
                    return (
                        <Icon name="file-text" size={30} color="#000000" />
                    );
                }
            }} />
            <Tab.Screen name="FormAll" component={FormAll} options={{
                tabBarLabel: "FormAll",
                tabBarIcon: () => {
                    return (
                        <Icon name="file-plus" size={30} color="#000000" />
                    );
                }
            }} />

        </Tab.Navigator>
    );
}

export default BottomTabNavigator;