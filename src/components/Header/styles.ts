import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 104,
        paddingTop: getStatusBarHeight(),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24
    },
    tittle: {
        flex: 1,
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 20
    }
});