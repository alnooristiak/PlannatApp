import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';

import Text from './src/components/text/text';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { typography } from './src/theme/typography';
import { preset } from './src/components/text/text.preset';

export default function App() {

  // Font Family Names 
  const [fontsLoaded] = useFonts({
    'Antonio-Regular': require('./assets/Antonio-Regular.ttf'),
    'Boogaloo-Regular': require('./assets/Boogaloo-Regular.ttf'),
    'CormorantUnicase-Regular': require('./assets/CormorantUnicase-Regular.ttf'),
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
    <View style={styles.container}>
      <Text style={{fontFamily: typography.primaryBlod, color: colors.darkBlue,}}>Open up App.js to start working on your app!</Text>

      <Text style={{fontFamily: typography.bold, marginTop: spacing[8],}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, ea?</Text>

      <Text preset="h1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, ea?</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9f43',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
