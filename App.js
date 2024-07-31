import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import styles from './src/styles/styles';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './src/navigation/StackNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <AuthNavigator />
      </View>
    </NavigationContainer>
  );
}