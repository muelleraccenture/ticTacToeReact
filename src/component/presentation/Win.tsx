import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {fonts, header} from "../../styles/base";

export interface WinStateProps {
    readonly playerTurn: string | null,
}

export const Win = ({playerTurn}: WinStateProps) => {

    return (
        <View style={styles.header}>
            <Text style={[styles.header, styles.custom]}>
                {"Player " + playerTurn + " Wins"}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: header,
    custom: {
        marginBottom: 20,
        marginVertical: 20,
        fontSize: fonts.lg,
    }
});

