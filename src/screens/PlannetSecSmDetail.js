import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'

const PlannetSecSmDetail = ({title, values}) => {
  return (
    <View style={styles.plannetSectionMView}>
      <Text preset='small' style={styles.plannetSecTitle}>{title}</Text>
      <Text preset='h1'>{values}</Text>
    </View>
  )
}

export default PlannetSecSmDetail

const styles = StyleSheet.create({
    plannetSectionMView:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: colors.greay,
        borderWidth: 1,
        marginHorizontal: spacing[3],
        marginVertical: spacing[4],
        padding: spacing[2],
    },
    plannetSecTitle:{
        textTransform: 'uppercase',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    plannetSecValue:{},
})