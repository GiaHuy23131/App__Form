import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import styles from './src/styles/styles';
import StackNavigator from './src/navigation/StackNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator';
export default function App() {
  return (
    <View style={styles.container} >
      <StackNavigator />
    </View>
  );
}