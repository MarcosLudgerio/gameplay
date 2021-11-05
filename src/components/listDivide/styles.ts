import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '75%',
        height: 3,
        backgroundColor: theme.colors.secondary40,
        marginVertical: 31,
        marginTop: 5,
        alignSelf: 'flex-end'
    },
});