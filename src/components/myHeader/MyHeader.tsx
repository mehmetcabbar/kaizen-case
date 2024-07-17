import { View } from "react-native"
import { useTranslation } from "react-i18next"
import { styles } from './Styles'

// Our components are here
import MyLogo from '../../images/logo.svg'
import MyButton from "../myButton/MyButton"
import LoginIcon from "../loginIcon/LoginIcon"
import Spacer from "../spacer/Spacer"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { isEqual } from "lodash"


const MyHeader = () => {
    const { t } = useTranslation()
    const active = useSelector((state: RootState) => state.active.value)
    return (
        <View style={styles.container}>
            <MyLogo />
            <View style={styles.buttonWrapper}>
                {
                    isEqual(active, 0) ?
                        <MyButton
                            title={t("login")}
                            isHeader={true}
                        />
                        : null
                }
                <Spacer paddingHorizontal={10} />
                <LoginIcon
                    isFiltered={!isEqual(active, 0) ? true : false}
                />
            </View>
        </View>
    )
}

export default MyHeader