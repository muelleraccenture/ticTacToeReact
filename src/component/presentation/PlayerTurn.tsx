import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {container, fonts, header} from "../../styles/base";

export interface PlayerStateProps {
    readonly playerTurn: string,
}

export const PlayerTurn = ({playerTurn}: PlayerStateProps) => {

    const player = playerTurn == 'X' ? 'O' : 'X'

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                <Text>
                    {"Player "}
                </Text>
                <Text style={styles.player}>{player}</Text>
                <Text>
                    {"'s turn"}
                </Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: container,
    player: {
        fontSize: fonts.lg
    },
    header: header
})
