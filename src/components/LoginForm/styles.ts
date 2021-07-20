import { StyleSheet, Dimensions } from 'react-native';
import { purple, purple2 } from "../../colors"

export default StyleSheet.create({
    btn: {
        alignItems: "center",
        backgroundColor: purple,
        padding: 10,
        borderRadius: 100,
        marginTop: 5,
        // margin: 50,
    },
    view: {
        backgroundColor: "white",
        display: 'flex',
        padding: 12,
        height: Dimensions.get('window').height,
        justifyContent: "center"
    },
    input: {
        backgroundColor: purple2,
        marginVertical: 5,
        paddingHorizontal: 20,
        color: "black",
        borderRadius: 100,
        fontSize: 14
    },
    form: {
        marginBottom: 200,
        marginHorizontal: 20,
    },
    logoContainer: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 200
    }
})