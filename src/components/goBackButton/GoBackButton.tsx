import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import GoBackIcon from '../../images/back/back.svg'
import { styles } from './Styles'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const GoBackButton = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.goBack()}
        >
            <GoBackIcon />
        </TouchableOpacity>
    )
}

export default GoBackButton