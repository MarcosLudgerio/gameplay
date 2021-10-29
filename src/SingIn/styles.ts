import { StyleSheet } from 'react-native';

import { theme } from '../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 360
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 15,
        marginBottom: 64
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    }
});