import { StyleSheet } from "react-native";
import { myColors } from "../utils/constants/myColors";


export const styles = StyleSheet.create({
    iconWrapper: {
        backgroundColor: myColors.MY_NAV_GRAY,
        borderRadius: 24,
    },
    shadow: {
        shadowColor: "#848484",
        shadowOffset: { width: 0, height: -3, },
        shadowOpacity: 0.10,
        shadowRadius: 5,
        elevation: 10,
    }
})