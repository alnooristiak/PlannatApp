import { Pressable, SafeAreaView, ScrollView, StyleSheet, View, Linking } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { colors } from '../theme/colors'
import PlannetHeader from '../components/PlannetHeader'
import { spacing } from '../theme/spacing'

const Details = ({ navigation, route }) => {

  const planet = route.params.planet;
  // console.log(planet);
  const {name, color, description, rotationTime, revolutionTime, radius, avgTemp, wikiLink, structure, surface} = planet;

  return (
    // <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <PlannetHeader backBTN={true} />
      <ScrollView>
        <View style={[styles.circle, { backgroundColor: color }]}>
        </View>
        <View>
          <Text preset='h1' style={styles.nameText}>{name}</Text>
        </View>
        <View>
          <Text preset='h4' style={styles.descriptionText}>{description}</Text>
          <Pressable 
          onPress={() => Linking.openURL(`${wikiLink}`)}
          style={styles.sourceSec}
          >
            <Text style={styles.sourceText}>Source: </Text>
            <Text style={styles.sourceLink}>
              Wikipedia
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
        
    // </SafeAreaView>    
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    marginTop: spacing[7],
    flex: 1,
    backgroundColor: colors.black,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    flexDirection: 'row',
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: spacing[9],
  },
  nameText:{
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: spacing[7],
  },
  descriptionText:{
    textAlign: 'center',
    paddingHorizontal: spacing[4],
    marginVertical: spacing[3],
    lineHeight: 24,
  },
  sourceSec:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sourceText:{
    fontWeight: 'bold',
  },
  sourceLink:{
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
})