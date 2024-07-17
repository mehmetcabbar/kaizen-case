import { View } from "react-native"
import { useTranslation } from "react-i18next"
import { styles } from './Styles'

// Our components are here
import MyLogo from '../../images/logo.svg'
import MyButton from "../myButton/MyButton"
import LoginIcon from "../loginIcon/LoginIcon"
import Spacer from "../spacer/Spacer"


const MyHeader = () => {
    const { t } = useTranslation()
    return (
        <View style={styles.container}>
            <MyLogo />
            <View style={styles.buttonWrapper}>
                <MyButton
                    title={t("login")}
                    isHeader={true}
                />
                <Spacer paddingHorizontal={10} />
                <LoginIcon />
            </View>
        </View>
    )
}

export default MyHeader