import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styles } from './Styles'
import DetailsImage from '../../components/detailsImage/DetailsImage'
import DetailsContent from '../../components/detailsContent/DetailsContent'
import Spacer from '../../components/spacer/Spacer'
import MyButton from '../../components/myButton/MyButton'
import { useTranslation } from 'react-i18next'


const Details = () => {
    const { t } = useTranslation()
    return (
        <View style={styles.container}>
            <ScrollView>
                <DetailsImage />
                <Spacer paddingVertical={7.5} />
                <DetailsContent />
            </ScrollView>
            <View style={styles.buttonBox}>
                <MyButton title={t("join_now")} />
            </View>
        </View>
    )
}

export default Details