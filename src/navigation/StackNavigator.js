import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';

// Screen
import DrawerNavigator from './DrawerNavigator';
import AddForm from '../screens/AddForm';

const Stack = createStackNavigator();

const IconBack = (navigation, title) => ({
    headerShown: true,
    title: title,
    headerTitleAlign: 'center',  // Center title
    headerLeft: () => (
        <Feather
            name="arrow-left"
            size={30}
            onPress={() => navigation.goBack()}
        />
    ),
});
const IconHeaderRight = (nameIcon, onPress) => ({
    headerShown: true,
    headerRight: () => (
        <Feather
            name={nameIcon}
            size={30}
            style={{ marginRight: 15 }}
            onPress={onPress} // Thay đổi điều hướng tại đây
        />
    ),
});

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='DrawerNavigator' screenOptions={{ headerStyle: { backgroundColor: '#DBA8A8' }, headerShown: false }}>
                <Stack.Screen name='DrawerNavigator' component={DrawerNavigator} />
                <Stack.Screen name='AddForm' component={AddForm}
                    options={({ navigation }) => IconBack(navigation, "Add Form")} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator;