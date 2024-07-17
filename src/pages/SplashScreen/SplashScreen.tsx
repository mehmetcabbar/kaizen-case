import { useEffect, useState } from 'react'
import { View, Animated } from 'react-native'
import { styles } from './Styles'

const SplashScreen = () => {
    const [fadeAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 1000, // 1 saniye
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 1000, // 1 saniye
                    useNativeDriver: true,
                }),
            ])
        ).start();

    }, [fadeAnim]);

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../../images/splash/logo.png')}
                style={[styles.logo, { opacity: fadeAnim }]}
            />
        </View>
    )
}

export default SplashScreen