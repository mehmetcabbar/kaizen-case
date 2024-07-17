import { Image, Text, View } from 'react-native'
import { styles } from './Styles'
import { useTranslation } from 'react-i18next'
import SliderBrands1 from '../../images/sliderBrands/sliderBrands1.svg'
import Spacer from '../spacer/Spacer'

const SingleContent = () => {
    const { t } = useTranslation()
    const count = 15
    const translation = t('last_twelve_days', { count });
    const parts = translation.split(count.toString());

    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={require('../../images/slider/slider1.png')}
                />
                <View style={styles.dayBox}>
                    <Text style={styles.dayContent}>
                        {parts[0]}
                        <Text style={styles.dynamicText}>{count}</Text>
                        {parts[1]}
                    </Text>
                </View>
                <View style={styles.brandBox}>
                    <SliderBrands1 />
                </View>
            </View>
            <View style={styles.contentBox}>
                <Text style={styles.contentText}>2,5 LT Coca-Cola kapakları </Text>
                <Text style={styles.contentText2}>Coca-Cola +Coffee kazandırıyor!</Text>
                <Spacer paddingVertical={5} />
                <Text style={[styles.link, { color: 'red' }]}>Daha Daha</Text>
            </View>
        </View>
    )
}

export default SingleContent