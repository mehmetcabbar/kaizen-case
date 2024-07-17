import { StyleSheet } from "react-native";
import { fontFamily, fontSize } from "../../utils/constants";
import { myColors } from "../../utils/constants/myColors";


export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 14
    },
    title: {
        fontSize: fontSize.LARGE,
        fontFamily: fontFamily.BOLD,
        color: myColors.MY_BLACK
    },
    text: {
        fontSize: fontSize.MEDIUM,
        fontFamily: fontFamily.REGULAR,
        color: myColors.MY_BLACK
    }
})