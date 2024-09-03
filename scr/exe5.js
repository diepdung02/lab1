import React from "react";
import { Text, StyleSheet, View } from "react-native";



const Square = ({ text, bgColor = "green" }) => (
    <View style={[styles.box, { backgroundColor: bgColor }]}>
        <Text style={styles.text}>{text}</Text>
    </View>
);

export default () => {
    return (
        <View style={styles.container}>
            <Square text='Hình A' />
            <Square text='Hình B' bgColor="red" />
            <Square text='Hình C' bgColor="purple" />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
    },
    box: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
