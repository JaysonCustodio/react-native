import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, } from 'react-native';

import style from "./styles"
import CheckBox from "../../Custom/CheckBox"
import api from "../../api"
import { purple } from '../../colors';

const LoginForm: React.FC = (props: any) => {

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    const handleLogin = async () => {
        const { message } = await api.requestLogin(loginData)
        const { navigation } = props
        if (message === 'OK') {
            navigation.navigate('dashboard')
        }

    }

    const handleInputChnge = (key: string, value: string) => {
        setLoginData({
            ...loginData,
            [key]: value
        })
    }

    return (
        <View style={style.view}>
            <View style={style.logoContainer}>
                <Text style={{
                    color: purple
                }}>LOGIN</Text>
            </View>
            <View style={style.form}>
                <TextInput style={style.input} placeholder="username" onChangeText={value => handleInputChnge('username', value)} />
                <TextInput style={style.input} placeholder="password" onChangeText={value => handleInputChnge('password', value)} />
                <TouchableOpacity style={style.btn} onPress={handleLogin}>
                    <Text style={{ color: "white" }}>login</Text>
                </TouchableOpacity>
                <CheckBox text="remember me" position="default" style={
                    {
                        color: 'gray',
                        fontSize: 13,
                        marginTop: 15
                    }
                } />
            </View>
        </View>

    )
}

export default LoginForm