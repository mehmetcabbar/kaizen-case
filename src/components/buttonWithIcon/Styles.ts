import { StyleSheet } from "react-native";
import { myColors } from "../../utils/constants/myColors";


export const styles = StyleSheet.create({
    wrapper: {
        minWidth: 105,
        height: 36,
        borderColor: myColors.MY_BORDER,
        borderWidth: 1.5,
        justifyContent: 'center',
        paddingLeft: 4,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 14,
        marginRight: 4
    },
    wrapperActive: {
        minWidth: 105,
        height: 36,
        borderColor: myColors.MY_RED,
        borderWidth: 1.5,
        justifyContent: 'center',
        paddingLeft: 4,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 14,
        marginRight: 4
    },
    text: {
        paddingLeft: 8,
        color: "black"
    }
})