import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from './text/text'
import { spacing } from '../theme/spacing'
import { colors } from '../theme/colors'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const PlannetHeader = ({ backBTN, title = "THE PLANETS" }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {backBTN && (
        <Pressable onPress={() => {navigation.goBack()}}>
          <AntDesign style={{marginRight: spacing[4]}} name='left' size={18} color='white' />
        </Pressable>
      )}

      <Text presets='h1'>{title}</Text>
    </View>
  )
}

export default PlannetHeader

const styles = StyleSheet.create({
  container: {
    // marginTop: spacing[3],
    padding: spacing[5],
    borderBottomWidth: 0.2,
    borderColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
})