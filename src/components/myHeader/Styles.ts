import { StyleSheet, Platform } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Platform.OS === "ios" ? 10 : 14,
        paddingHorizontal: 14
    },
    buttonWrapper: {
        flexDirection: 'row'
    }
})