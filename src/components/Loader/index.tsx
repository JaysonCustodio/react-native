import useFloatingHeaderHeight from "@react-navigation/stack/lib/typescript/src/utils/useHeaderHeight"
import React, { useEffect, useRef, useState } from "react"
import { Linking, Text, View, Animated, StyleSheet } from "react-native"
import { LoginForm } from "../../components"
import style from "./style"

const Loader: React.FC = () => {

    const left = useRef(new Animated.Value(10)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds

    };

    //   const myAnimation = Animated.loop(
    // Animated.sequence([
    Animated.timing(left, {
        toValue: 150,
        duration: 3000,
        useNativeDriver: false,
    }),
        // Animated.timing(left, {
        //     toValue: 0,
        //     duration: 500,
        //     useNativeDriver: false
        // }),
        //  ]),
        // { iterations: 1000 }
        //  )

        useEffect(() => {
            Animated.timing(left, {
                toValue: 170,
                duration: 3000,
                useNativeDriver: false,
            }).start()
            // return () => myAnimation.stop()
        }, [])



    return (
        <View style={style.view}>
            <View style={style.circle}>
                <Text style={{ color: "#DDA1D4" }}>Logo here</Text>
            </View>
            <Animated.View style={[style.line, {
                width: left
            }]} >
                <View style={style.line2} />
            </ Animated.View >
        </View >
    )
}

export default Loader