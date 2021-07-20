import React from "react"
import { Text, View, TextInput, Image } from "react-native"

import styles from "./styles"

interface AddPostProps {

}

const AddPost: React.FC<AddPostProps> = () => {
    return (
        <View style={styles.container}>
            <View style={styles.addPost}>
                <View>
                    <Image style={styles.image} source={require('../../assets/phil.jpg')} />
                </View>
                <TextInput style={styles.input} placeholder="what's on your mind?" />
            </View>
            <View style={styles.actions}>
                <Text>live</Text>
                <Text style={styles.photo}>photo</Text>
                <Text>room</Text>
            </View>
        </View>
    )
}

export default AddPost