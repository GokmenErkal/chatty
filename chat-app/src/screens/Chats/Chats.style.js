import { StyleSheet } from "react-native";
import { colors } from "../../config/constants";

export default StyleSheet.create({
    fabContainer:{
        backgroundColor: colors.primary,
        width: 56,
        height:56,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 20,
        bottom: 20,
        borderRadius: 28,
    }
})