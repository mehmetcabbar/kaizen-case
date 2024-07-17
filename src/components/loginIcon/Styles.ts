import { StyleSheet } from "react-native";
import { myColors } from "../../utils/constants/myColors";


export const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: myColors.MY_BLACK,
        justifyContent: 'center',
        alignItems: 'center'
    },
    filteredContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: myColors.MY_RED,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    badge: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: myColors.MY_GREEN,
        borderColor: myColors.MY_WHITE,
        borderWidth: 2,
        position: 'absolute',
        top: 0,
        right: 2
    }
})