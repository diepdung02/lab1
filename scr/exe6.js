import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";


const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Square = ({ text, bgColor = "green" }) => (
    <View style={[styles.box, { backgroundColor: bgColor }]}>
        <Text>{text}</Text>
    </View>
);


export default () => {
    return (
        <ScrollView style={styles.container}>
            {data.map((item, index) => (
                <Square
                    key={item}
                    text={`Item ${index + 1}`}
                    bgColor={index % 2 === 0 ? "lightblue" : "lightcoral"} 
                />
            ))}
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {backgroundColor: 'yellow'},
    box: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
    },
});