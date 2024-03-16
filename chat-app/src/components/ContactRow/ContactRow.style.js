import { StyleSheet } from "react-native";

export default StyleSheet.create({
    row: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    avatar: {
        width: 56,
        height: 56,
        backgroundColor: '#2196f3',
        borderRadius: 28,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar_label: {
        fontSize: 20,
        color: '#fff',
    },
    text_contanier: {
        flex: 1,
    },
    name: {
        fontSize: 18,
    },
    subtitle: {
        color: '#565656',
        marginTop: 3
    },
    serprator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'gray',
        marginStart: 75,
    }
})