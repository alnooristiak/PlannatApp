import { SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { colors } from '../theme/colors'
import PlannetHeader from '../components/PlannetHeader'
import { spacing } from '../theme/spacing'

const Details = () => {
  return (
    <SafeAreaView style={styles.container}>
        <PlannetHeader backBTN={true} />
    </SafeAreaView>    
  )
}

export default Details

const styles = StyleSheet.create({
  container: {
    marginTop: spacing[7],
    flex: 1,
    backgroundColor: colors.black,
  },
})