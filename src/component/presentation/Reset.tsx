import {Button} from "react-native";
import React from "react";

export interface ResetStateDispatchProps {
    readonly onPress: () => void,
}

export const Reset = ({onPress}: ResetStateDispatchProps) => {

    return (
        <Button
            title={"Reset"}
            onPress={() => onPress()}
        >
        </Button>
    )
}
