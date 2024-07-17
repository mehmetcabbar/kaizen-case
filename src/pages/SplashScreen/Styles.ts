import { StyleSheet } from "react-native";
import { myColors } from "../../utils/constants/myColors";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: myColors.MY_WHITE,
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    logo: {
        width: 80,
        height: 40,
    },
})