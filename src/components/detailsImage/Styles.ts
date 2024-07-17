import { StyleSheet, Platform } from "react-native";
import { myColors } from "../../utils/constants/myColors";
import { fontFamily, fontSize } from "../../utils/constants";


export const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    goBack: {
        position: 'absolute',
        top: Platform.OS === "ios" ? 50 : 25,
        left: 10,
        zIndex: 1
    },
    brandBox: {
        position: 'absolute',
        bottom: 10,
        left: 8,
        zIndex: 1
    },
    daysBox: {
        position: 'absolute',
        right: 14,
        bottom: 30,
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
})