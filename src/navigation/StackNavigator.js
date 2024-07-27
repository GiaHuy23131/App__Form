import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';

// Screen
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const IconBack = (navigation, title) => ({
    headerShown: true,
    title: title,
    headerTitleAlign: 'center',  // Center title
    headerLeft: () => (
        <Feather
            name="arrow-left"
            size={30}
            color="#29E3EF"
            onPress={() => navigation.goBack()}
        />
    ),
});

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='DrawerNavigator' screenOptions={{ headerStyle: { backgroundColor: '#DBA8A8' }, headerShown: false }}>
                <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator;