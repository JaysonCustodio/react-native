import { StyleSheet, Dimensions } from "react-native"
import { lightgray } from "../../colors"


export default StyleSheet.create({
    addPost: {
        flexDirection: "row",
        padding: 10,
        borderBottomWidth: 1,
        borderColor: lightgray
        
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: 10
    },
    input: {
        borderRadius: 100,
        borderWidth: 1,
        borderColor: lightgray,
        marginLeft: 10,
        height: 40,
        width: Dimensions.get('window').width - 75,
        paddingHorizontal: 15
    },
    image: {
        height: 45,
        width: 45,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: lightgray,
    },
    container: {
        backgroundColor: "white",
    },
    photo: {
        borderColor: lightgray,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        paddingHorizontal: 35
    }
})