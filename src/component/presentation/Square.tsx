import React from "react"
import {StyleSheet, View, Text} from "react-native";

export const Square = () => {
    return <View style={styles.container}>
                <Text>I'm a square</Text>
            </View>
}

const styles = StyleSheet.create({
   container: {
       borderBlock: "10px",
       borderColor: "black"
   }
});
