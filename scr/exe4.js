import React, { useState } from "react";
import { Text, Button, View, StyleSheet } from "react-native";

export default () => {
    const [pressCount, setPressCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bạn đã nhấn nút {pressCount} lần.</Text>
            <Button 
                title={`Nhấn vào đây (${pressCount} lần)`}
                onPress={() => setPressCount(pressCount + 1)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent:"center",
        alignItems: "center",
        margin: 20,
        top:50,
    },
    text: {
        marginBottom: 10,
        fontSize: 16,
    },
});
