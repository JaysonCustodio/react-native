import { StyleSheet } from "react-native"

export default StyleSheet.create({
    myImage: {
        flex: 1,
        resizeMode: "cover",
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'space-between'
    },
    container: {
        height: 160,
        width: 100,
        backgroundColor: "gray",
        borderRadius: 10,
        marginLeft: 10,
    },
    owner: {
       height: 50,
        width: 50,
        backgroundColor: "transparent",
        borderRadius: 50,
        borderColor: "#3a7bde",
        borderWidth: 3,
        margin: 5,
        padding: 2
    },
    ownerImage: {
        flex: 1,
        resizeMode: "cover",
        borderRadius: 50,
        overflow: 'hidden'
    },
    ownerName: {
        color: "white",
        fontSize: 10,
        margin: 10
    }
})