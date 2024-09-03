import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const Lab1_1 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.txt}>Hello thầy nha</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'blue',
    },
    containerText: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        color: 'white', 
        fontSize:20,
    }
});

export default Lab1_1;
