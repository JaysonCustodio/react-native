import React from "react"
import { ImageBackground, View, Text } from "react-native"
import styles from "./styles"

interface MyDayProps {
    storyOwner: string
}

const MyDay: React.FC<MyDayProps> = ({ storyOwner }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../assets/myday.jpeg")} style={styles.myImage} >
                <View style={styles.owner}>
                    <ImageBackground source={require("../../assets/frank.jpg")} style={styles.ownerImage} />
                </View>
                <Text style={styles.ownerName}>{storyOwner}</Text>
            </ ImageBackground >
        </View>
    )
}

export default MyDay