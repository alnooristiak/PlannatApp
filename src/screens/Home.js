import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import PlannetHeader from '../components/PlannetHeader'
import { spacing } from '../theme/spacing'
import { PLANET_LIST } from '../data/planet-list';
import Text from '../components/text/text'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <PlannetHeader />
        <Text style={{ color: colors.white, }}>This is a page Home</Text>
        {/* Data loging  */}
        <View>
          <FlatList 
          contentContainerStyle={styles.list}
          data={PLANET_LIST}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={[styles.circle, {backgroundColor: item.color}]}></View>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            );
          }}
          />
        </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    marginTop: spacing[7],
  },

  // data loding section list style 
  list: {
    padding: spacing[5],
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
})