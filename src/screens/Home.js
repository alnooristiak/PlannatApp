import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import PlannetHeader from '../components/PlannetHeader'
import { spacing } from '../theme/spacing'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <PlannetHeader />
        <Text style={{ color: colors.white, }}>This is a page Home</Text>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    marginTop: spacing[7],
  }
})