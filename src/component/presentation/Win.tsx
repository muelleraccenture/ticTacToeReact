import {Button, Text, View} from "react-native";
import React from "react";

export interface WinStateProps {
    readonly playerTurn: string,
}

export interface WinStateDispatchProps {
    readonly onPress: () => void,
}

export const Win = ({playerTurn, onPress}: WinStateProps & WinStateDispatchProps) => {

    return (
        <View>
            <Text>
                {"Player " + playerTurn + " Wins"}
            </Text>
            <Button
                title={"Reset"}
                onPress={() => onPress()}
            >
            </Button>
        </View>
    )
}


