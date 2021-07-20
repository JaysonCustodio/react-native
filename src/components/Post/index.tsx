import React from "react"
import { Image, ImageBackground, Text, View } from "react-native"
import styles from "./style"

interface PostProps {
    user: string
}


const Post: React.FC<PostProps> = ({ user }) => {
    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <Image style={styles.imageProfile} source={require('../../assets/frank.jpg')} resizeMode="cover" />
                <View style={styles.name_date}>
                    <Text style={styles.name}>{user}</Text>
                    <Text style={styles.date}>3d.</Text>
                </View>
            </View>
            <View style={styles.post}>
                <Text style={{ padding: 10, fontFamily: 'Roboto' }}>this is sample caption of my post.... blah blah</Text>
                <View style={styles.userpost}>
                    <ImageBackground style={styles.imagePost} source={require('../../assets/myday.jpeg')} />
                </View>
                <View style={styles.reactions}>
                    <Text>100k likes</Text>
                    <Text>543k comments</Text>
                </View>
            </View>
            <View style={styles.actions}>
                <Text>like</Text>
                <Text>comment</Text>
                <Text>share</Text>
            </View>
        </View>
    )
}

export default Post