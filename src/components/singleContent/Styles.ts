import { StyleSheet } from "react-native";
import { myColors } from "../../utils/constants/myColors";
import { fontFamily, fontSize } from "../../utils/constants";


export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 14,
        position: 'relative',
        alignItems: 'center',
    },
    dayBox: {
        position: 'absolute',
        right: 14,
        bottom: 140,
        height: 32,
        minWidth: 98,
        borderRadius: 32 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: myColors.MY_BLACK
    },
    dayContent: {
        color: myColors.MY_WHITE,
        fontFamily: fontFamily.REGULAR,
        fontSize: fontSize.MEDIUM,
        letterSpacing: -0.54
    },
    dynamicText: {
        fontSize: fontSize.AFTERMEDIUM,
        letterSpacing: -0.47
    },
    brandBox: {
        position: 'absolute',
        width: 55,
        height: 55,
        top: 199,
        left: 8
    },
    contentBox: {
        position: 'absolute',
        bottom: 45,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentSecondBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'relative'
    },
    contentText: {
        fontFamily: fontFamily.BOLD,
        fontSize: fontSize.MEDIUM,
        color: myColors.MY_BLACK,
        letterSpacing: -0.22
    },
    contentText2: {
        fontFamily: fontFamily.BOLD,
        fontSize: fontSize.MEDIUM,
        color: myColors.MY_BLACK,
        letterSpacing: -0.22,
        paddingTop: 2
    },
    link: {
        fontFamily: fontFamily.BOLD,
        fontSize: fontSize.MEDIUM,
        letterSpacing: -0.22,

    }
})