import {Button} from "react-native";
import React from "react";

export interface ResetStateDispatchProps {
    readonly resetGame: () => void,
}

export const Reset = ({resetGame}: ResetStateDispatchProps) => {

    return (
        <Button
            title={"Reset"}
            onPress={() => resetGame()}
        >
        </Button>
    )
}
