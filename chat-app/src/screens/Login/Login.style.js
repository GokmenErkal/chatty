import { StyleSheet } from "react-native";
import { colors } from "../../config/constants";

export default StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1
    },
    title: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 36,
    },
    inputText: {
        backgroundColor: '#e0e0e0',
        padding: 12,
        borderRadius: 6,
        fontSize: 15,
        marginVertical: 8
    },
    contentContainer: {
        padding: 28
    },
})