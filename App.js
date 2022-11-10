import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Text from './src/components/text/text';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { typography } from './src/theme/typography';
import { preset } from './src/components/text/text.preset';
import Home from './src/screens/Home';


export default function App() {

  const Stack = createNativeStackNavigator();

  // Font Family Names 
  const [fontsLoaded] = useFonts({
    'Antonio-Regular': require('./assets/Antonio-Regular.ttf'),
    'Boogaloo-Regular': require('./assets/Boogaloo-Regular.ttf'),
    'XanhMono-Regular': require('./assets/XanhMono-Regular.ttf'),
  });
  // When Font Loding Condation 
  if (!fontsLoaded) {
    return (
      <View>
        <Text>Font is Loading ....</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen  options={{headerShown: false,}} name="Home" component={Home}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#ff9f43',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
