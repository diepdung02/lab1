import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";

export default () => {
    return (
        <View style={style.container}>
            <TouchableOpacity style={style.button} onPress={() => alert("Hello Thầy")}>
                <Text style={style.text}>Click vào đây</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[style.button, { backgroundColor: 'blue' }]} onPress={() => alert("Hello Thầy")}>
                <Text style={style.text}>Click vào đây</Text>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    button: {
        backgroundColor: "green",
        marginTop: 20,
        alignItems: "center",
        padding: 10,
        borderRadius: 5,
        borderColor:"#ccc",
        borderWidth:5
    },
    text: {
        color: "white",
        fontSize: 15
    }
});
