import React, { ReactElement, useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, StyleProp } from 'react-native'
import { purple } from "../colors"

interface CheckboxProps {
    text: string,
    position: string,
    style?: StyleProp<any>
}

const myStyle = StyleSheet.create({
    box: {
        height: 20,
        width: 20,
        borderColor: purple,
        borderWidth: 2,
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 5
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "center",
    },
    check: {
        color: 'white',
        fontSize: 10,
    },
    text: {
        fontSize: 14
    }
})


const Checkbox: React.FC<CheckboxProps> = (props) => {
    const { text, position, style } = props
    const [checked, setChecked] = useState(false)
    const onHandleChange = () => {
        setChecked(!checked)
    }

    return (
        <View style={[myStyle.container, style]}>
            <TouchableOpacity style={[myStyle.box, {
                backgroundColor: checked ? purple : "white"
            }]} onPress={() => onHandleChange()}>
                <Text style={[myStyle.check, {
                    display: checked ? "flex" : "none",
                }]}>✔</Text>
            </TouchableOpacity>
            <Text style={[myStyle.text, {
                color: style?.color,
                fontSize: style?.fontSize
            }]}> {text} </Text>
        </View>
    )
}

export default Checkbox