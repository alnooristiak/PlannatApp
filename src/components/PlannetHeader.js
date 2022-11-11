import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from './text/text'
import { spacing } from '../theme/spacing'
import { colors } from '../theme/colors'

const PlannetHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text presets='h1'>THE PLANET'S</Text>
      </View>
    </SafeAreaView>
  )
}

export default PlannetHeader

const styles = StyleSheet.create({
  container: {
    // marginTop: spacing[3],
    padding: spacing[5],
    borderBottomWidth: 0.2,
    borderColor: colors.white,
  },
})