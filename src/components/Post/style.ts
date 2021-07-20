import { Dimensions, StyleSheet } from "react-native"
import { lightgray } from "../../colors"


export default StyleSheet.create({
    imageProfile: {
        height: 45,
        width: 45,
        borderRadius: 100,
        borderColor: lightgray,
        borderWidth: 2
    },
    imagePost: {
        flex: 1,
        overflow: 'hidden',
        resizeMode: "cover"
    },
    userpost: {
        width: Dimensions.get('window').width,
        height: 200,
        backgroundColor: 'gray',
    },
    userContainer: {
        flexDirection: "row",
        alignContent: "center",
        backgroundColor: 'white',
        padding: 10
    },
    date: {
        color: "gray"
    },
    name: {
        
    },
    post: {
        //padding: 10,
        backgroundColor: "white"
    },
    name_date: {
        justifyContent: 'center',
        paddingLeft: 10
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        padding: 10,
        backgroundColor: "white",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: lightgray
    },
    reactions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    container: {
        paddingTop: 10
    }
    

}) 