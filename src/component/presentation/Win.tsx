import {Text, View} from "react-native";
import React from "react";
import {ResetContainer} from "../container/ResetContainer";

export interface WinStateProps {
    readonly playerTurn: string,
}

export const Win = ({playerTurn}: WinStateProps) => {

    return (
        <View>
            <Text>
                {"Player " + playerTurn + " Wins"}
            </Text>
            <ResetContainer></ResetContainer>
        </View>
    )
}


