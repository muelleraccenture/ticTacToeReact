import {PlayerTurn} from "./PlayerTurn";
import {GameStatus, MoveState} from "../../store/state/MoveState";
import {Win} from "./Win";
import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {container, header} from "../../styles/base";

export interface HeaderStateProps {
    readonly moveState: MoveState,
}

export class Header extends React.Component<HeaderStateProps> {

    render() {
        const moveState = this.props.moveState
        let headerElement

        if (moveState.gameStatus == GameStatus.Winner) {
            headerElement = <Win playerTurn={moveState.playerTurn}/>
        } else if (moveState.gameStatus == GameStatus.InProgress) {
            headerElement = <PlayerTurn playerTurn={moveState.playerTurn}/>
        } else if (moveState.gameStatus == GameStatus.CatsGame) {
            headerElement =
                <View style={styles.container}>
                    <Text style={styles.header}>
                        {"Cats Game"}
                    </Text>
                </View>
        }

        return headerElement
    }
}


const styles = StyleSheet.create({
    container: container,
    header: header,
})
