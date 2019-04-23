import {Dimensions, StyleSheet, Text, View} from "react-native";
import React from "react";
import {ResetContainer} from "../container/ResetContainer";
import {colors, container, fonts} from "../../styles/base";

export interface WinStateProps {
    readonly playerTurn: string,
}

export const Win = ({playerTurn}: WinStateProps) => {

    return (
        <View style={styles.header}>
            <Text style={styles.header}>
                {"Player " + playerTurn + " Wins"}
            </Text>
            <ResetContainer></ResetContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.header,
        marginVertical: container.marginVert,
        fontSize: fonts.lg,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    }
});

