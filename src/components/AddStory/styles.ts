import { StyleSheet } from "react-native"
import { lightgray } from "../../colors"

export default StyleSheet.create({
    container: {
        height: 160,
        width: 100,
        backgroundColor: "gray",
        borderRadius: 10,
        marginLeft: 5
    },
    myImage: {
        flex: 1,
        resizeMode: "cover",
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: "flex-end",
        borderWidth: 1,
        borderColor: lightgray
    },
    buttonContainer: {
        backgroundColor: "white",
        height: 50,
        width: 100,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 10
    },
    addStorybtn: {
        backgroundColor: "#2b73e0",
        height: 40,
        width: 40,
        borderColor: "white",
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginBottom: 10
    }
})