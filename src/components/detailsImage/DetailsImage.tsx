import React from 'react'
import { View, Image, Text } from 'react-native'
import { styles } from './Styles'
import GoBackButton from '../goBackButton/GoBackButton'
import BrandLogo from '../../images/sliderBrands/sliderBrands1.svg'
import { useTranslation } from 'react-i18next'

const DetailsImage = () => {
    const { t } = useTranslation()
    const count = 12
    const translation = t('last_twelve_days', { count });
    const parts = translation.split(count.toString());
    return (
        <View style={styles.container}>
            <Image
                source={require('../../images/details/details.png')}
                resizeMode='cover'
                style={{
                    width: '100%'
                }}
            />
            <View style={styles.goBack}>
                <GoBackButton />
            </View>
            <View style={styles.brandBox}>
                <BrandLogo />
            </View>
            <View style={styles.daysBox}>
                <Text style={styles.dayContent}>
                    {parts[0]}
                    <Text style={styles.dynamicText}>{count}</Text>
                    {parts[1]}
                </Text>
            </View>
        </View>
    )
}

export default DetailsImage