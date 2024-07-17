import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './Styles'
import { useTranslation } from 'react-i18next'
import { ISingleType } from '../../types/Types'

//Our brand image are here
import SliderBrands1 from '../../images/sliderBrands/sliderBrands1.svg'
import SliderBrands2 from '../../images/sliderBrands/sliderBrands2.svg'

//Component is here
import Spacer from '../spacer/Spacer'

const imagePaths: any = {
    "slider1.png": require('../../images/slider/slider1.png'),
    "slider2.png": require('../../images/slider/slider2.png'),
    "slider3.png": require('../../images/slider/slider1.png'),
    "slider4.png": require('../../images/slider/slider1.png'),
    "slider5.png": require('../../images/slider/slider1.png'),
};

const SingleContent = ({ image, title, buttonHex, index, onPress }: ISingleType) => {
    const { t } = useTranslation()
    const count = 12
    const translation = t('last_twelve_days', { count });
    const parts = translation.split(count.toString());

    const getMyBrand = () => {
        if (index === 0) {
            return <SliderBrands1 />
        } else if (index % 2 === 0) {
            return <SliderBrands1 />
        } else {
            return <SliderBrands2 />
        }
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <View>
                <Image
                    source={imagePaths[image]}
                />
                <View style={styles.dayBox}>
                    <Text style={styles.dayContent}>
                        {parts[0]}
                        <Text style={styles.dynamicText}>{count}</Text>
                        {parts[1]}
                    </Text>
                </View>
                <View style={styles.brandBox}>
                    {getMyBrand()}
                </View>
            </View>
            <View style={styles.contentBox}>
                <Text style={styles.contentText}>{title} </Text>
                <Spacer paddingVertical={5} />
                <Text style={[styles.link, { color: buttonHex }]}>{t("more_and_more")}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SingleContent