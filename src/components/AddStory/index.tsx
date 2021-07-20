import React from "react"
import { View, ImageBackground, TouchableOpacity, Text } from "react-native"
import style from "../Post/style"
import styles from "./styles"

interface AddStoryProps {

}

const AddStory: React.FC<AddStoryProps> = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../assets/phil.jpg")} style={styles.myImage} >
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.addStorybtn}>
                        <Text style={{
                            color: 'white',
                            fontSize: 24
                        }}>+</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 10 }}>Create Story</Text>
                </View>
            </ ImageBackground >
        </View>
    )
}

export default AddStory