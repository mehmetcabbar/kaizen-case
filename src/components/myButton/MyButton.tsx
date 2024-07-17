import React from 'react'
import { Alert, Text, TouchableOpacity } from 'react-native'
import { styles } from './Styles'
import { useTranslation } from 'react-i18next'

type IButton = {
    title: string,
    isHeader?: boolean
}

const MyButton = ({ title, isHeader }: IButton) => {
    const { t } = useTranslation()
    return (
        <TouchableOpacity
            style={isHeader ? styles.headerContainer : styles.container}
            onPress={() => Alert.alert(t("function_will_be_added_soon"), `${t("please_try_again_later")}`)}
        >
            <Text style={isHeader ? styles.headerText : styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default MyButton