import React, { useReducer } from "react";
import { FlatList, ScrollViewBase, Text, View, ScrollView } from "react-native";
import AddPost from "../AddPost";
import AddStory from "../AddStory";
import MyDay from "../MyDay";
import Post from "../Post";

import styles from "./styles"



const Home: React.FC = (props: any) => {

    const DATA = [
        { id: 1, user: 'Abraham Lincoln' },
        { id: 2, user: 'Abraham Lincoln' },
        { id: 3, user: 'Abraham Lincoln' },
        { id: 4, user: 'Abraham Lincoln' },
        { id: 5, user: 'Abraham Lincoln' }
    ]

    const renderItem = ({ item }: any) => (
        <MyDay key={item.id} storyOwner={item.user} />
    )


    return (
        // <View style={styles.container} >
        //     <AddPost />
        //     <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item): any => item.id} />
        // </View>
        <ScrollView>
            <AddPost />
            <View style={styles.myDayContainer}>
                <AddStory />
                <FlatList horizontal data={DATA} renderItem={renderItem} keyExtractor={(item): any => item.id} />
            </View>
            {DATA.map(item => {
                return (<Post key={item.id} user={item.user} />)
            })}
        </ScrollView>
    )
}

export default Home