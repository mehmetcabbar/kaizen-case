import React from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './Styles'
import ProfileIcon from '../../images/header/profile.svg'
import { useTranslation } from 'react-i18next'

type ILoginIconTypes = {
    isFiltered?: boolean
}

const LoginIcon = ({ isFiltered }: ILoginIconTypes) => {
    const { t } = useTranslation()
    return (
        <TouchableOpacity
            style={isFiltered ? styles.filteredContainer : styles.container}
            onPress={() => Alert.alert(t("function_will_be_added_soon"), `${t("please_try_again_later")}`)}
        >
            {isFiltered ? <View style={styles.badge} /> : null}
            <ProfileIcon />
        </TouchableOpacity>
    )
}

export default LoginIcon