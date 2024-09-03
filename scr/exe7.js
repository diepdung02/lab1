import React, { useState } from "react";
import { TextInput, Text, View, StyleSheet, Button } from "react-native";



export default () => {
    const [name, setName] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Bạn tên gì?</Text>
            <TextInput 
                style={styles.input}
                placeholder="Nhập tên của bạn"
                placeholderTextColor="rgba(0, 0, 0, 0.5)"
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <View style={styles.button}>
                <Button  
                    title="Gửi"
                    onPress={()  => {
                        alert(`Chào bạn, ${name}!`);
                        setName("");
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    label: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        marginTop: 10,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        padding: 10,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "gray",
    },
    button: {
        marginTop: 20,
    }
});
