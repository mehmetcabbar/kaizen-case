import { StyleSheet } from "react-native";
import { myColors } from "../../utils/constants/myColors";
import { fontFamily, fontSize } from "../../utils/constants";


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: myColors.MY_RED,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 28
    },
    text: {
        color: myColors.MY_WHITE,
        fontFamily: fontFamily.BOLD,
        fontSize: fontSize.MEDIUM
    },
    headerText: {
        color: myColors.MY_WHITE,
        fontFamily: fontFamily.BOLD,
        fontSize: fontSize.SMALL
    },
    headerContainer: {
        width: 90,
        height: 40,
        backgroundColor: myColors.MY_RED,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 28
    },
})