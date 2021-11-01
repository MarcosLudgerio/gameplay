import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
    container: {
        width: 104,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginRight: 12
    },
    content: {
        width: 100,
        height: 116,
        backgroundColor: theme.colors.secondary40,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 7

    },
    checked: {
        width: 10,
        height: 10,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-end',
        marginRight: 8,
    },
    unchecked: {
        width: 12,
        height: 12,
        backgroundColor: theme.colors.secondary100,
        alignSelf: 'flex-end',
        marginRight: 8,
        borderColor: theme.colors.secondary50,
        borderWidth: 2,
        borderRadius: 3
    },
    title: {
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        fontSize: 16

    }
});