import { StyleSheet } from "react-native";
import { colors } from '../../config/constants'

export default StyleSheet.create({
    iconContainer: {
        width: 32,
        height: 32,
        marginLeft: 10,
        backgroundColor: colors.red,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cell: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.border,
        
    },
    title: {
        fontSize: 16,
        marginLeft: 24,
        flex: 1,
    },
})