import React from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";


export default () => {
    return (
        <View style={styles.container}>
            <Button title="Nhấp vào đây để nhận thông tin" onPress={()=> alert("Hello Thầy")}/>
            <TouchableOpacity style={styles.button} onPress={() => alert("Hello Thầy lần nữa")}>
                <Text style={styles.text}>
                    Click vào đây để nhận bất ngờ
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:'center'
        },
        button:{
            backgroundColor:"green",
            marginTop:20,
            alignItems:"center",
            padding:10
        },
        text:{
            color:"black",
            fontSize:15
        }
    }
)