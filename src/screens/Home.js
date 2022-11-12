import { FlatList, Pressable, SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../theme/colors'
import PlannetHeader from '../components/PlannetHeader'
import { spacing } from '../theme/spacing'
import { PLANET_LIST } from '../data/planet-list';
import Text from '../components/text/text'
import { AntDesign } from '@expo/vector-icons';

const Home = ({ navigation }) => {

  const [list, setList] = useState(PLANET_LIST);

  // text search filter heandeler 
  const searchFilter = (text) => {
    const filerList = PLANET_LIST.filter(item => {
      const itemName = item.name.toLocaleLowerCase();
      const usertextInput = text.toLocaleLowerCase();

      // -1 vale mean itemName valu & usertextInput value are same acorate 
      return itemName.indexOf(usertextInput) > -1;
    });

    setList(filerList);
  }; // end

  // render item for reandering data 
  const renderItem = ({ item }) => {
    const {name, color} = item;
    return (
      <Pressable
        onPress={() => navigation.navigate('Details', { planet: item })}
        style={styles.dataContainer}
      >
        <View style={styles.dataSecondContainer}>
          <View style={[styles.circle, { backgroundColor: item.color }]}></View>
          <Text preset='h4' style={styles.item}>{item.name}</Text>
        </View>
        <AntDesign name='right' size={18} color='white' />
      </Pressable>
    );
  };// render end

  return (
    // <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <PlannetHeader />
      <TextInput 
      onChangeText={(text) => searchFilter(text)}
      autoCorrect={false}
      style={styles.textSearchInput} 
      placeholder='Type The Plannet Name'
      placeholderTextColor={colors.white}
      />
      {/* <Text style={{ color: colors.white, }}>This is a page Home</Text> */}
      {/* Data loging  */}
      <View>
        <FlatList
          contentContainerStyle={styles.list}
          data={list}
          keyExtractor={(item) => item.name}

          // rendering item 
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </View>
    // </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({

  container: {
    marginTop: spacing[7],
    flex: 1,
    backgroundColor: colors.black,
  },

  // Text Search Input
  textSearchInput: {
    padding: spacing[4],
    borderBottomColor: colors.white,
    color: colors.white,
    borderBottomWidth: 1,
    margin: spacing[5],
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