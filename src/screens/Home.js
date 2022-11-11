import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import PlannetHeader from '../components/PlannetHeader'
import { spacing } from '../theme/spacing'
import { PLANET_LIST } from '../data/planet-list';
import Text from '../components/text/text'
import { AntDesign } from '@expo/vector-icons';

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
              <View style={styles.dataContainer}>
                <View style={styles.dataSecondContainer}>
                  <View style={[styles.circle, {backgroundColor: item.color}]}></View>
                  <Text preset='h4' style={styles.item}>{item.name}</Text>
                </View>  
                <AntDesign name='right' size={18} color='white' />
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({

  container: {
    marginTop: spacing[7],
    flex: 1,
    backgroundColor: colors.black,
  },

  // data loding section list style 
  dataContainer: {
    flexDirection: "row",
    alignItems: 'center',
    margin: spacing[2],
    justifyContent: 'space-between',
  },
  dataSecondContainer: {
    flexDirection: "row",
    alignItems: 'center',
  },
  list: {
    padding: spacing[5],
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 15,
  },
  item: {
    textTransform: 'uppercase',
    marginLeft: spacing[4],
    // flexDirection: 'row',
    // justifyContent: 'center',
    // padding: spacing[5],
  },
  separator: {
    borderBottomColor: colors.white,
    borderBottomWidth: 0.5,
  }

})