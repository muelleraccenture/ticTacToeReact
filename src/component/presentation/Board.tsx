import React from "react"
import {Button, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {GameStatus, Space} from "../../store/state/MoveState";
import {ResetContainer} from "../container/ResetContainer";
import {container, header} from "../../styles/base";
import {PlayerTurn} from "./PlayerTurn";
import {Win} from "./Win";
import {BoardState} from "../../store/state/BoardState";
import {Reset} from "./Reset";

export interface BoardStateProps {
    readonly boardState: BoardState
}

export interface BoardStateDispatchProps {
    readonly onPress: (index: number) => void,
    readonly resetGame: () => void,
}

export class Board extends React.Component<BoardStateProps & BoardStateDispatchProps> {


    render() {
        const history = this.props.boardState.history
        const moveState = history[history.length - 1]
        let headerElement

        if (moveState.gameStatus == GameStatus.Winner) {
            headerElement = <Win playerTurn={moveState.playerTurn}/>
        } else if (moveState.gameStatus == GameStatus.InProgress) {
            headerElement = <PlayerTurn playerTurn={moveState.playerTurn}/>
        } else if (moveState.gameStatus == GameStatus.CatsGame) {
            headerElement =
                <View style={styles.container}>
                    // @ts-ignore
                    <Text style={styles.header}>
                        {"Cats Game"}
                    </Text>
                </View>
        }

        const boardSpacePressAction = moveState.gameStatus == GameStatus.Winner
            ? (i: number) => undefined :
            (i: number) => this.props.onPress(i)

        return (
            <View>
                {headerElement}
                <FlatList
                    data={moveState.data as Space[]}
                    style={styles.container}
                    renderItem={
                        ({item, index}) => {
                            const value = item.value ? String(item.value) : "     "
                            const cellStyle = item.win ? styles.winningRowItem : styles.rowItem
                            const textStyle = item.win ? styles.winItemText : styles.itemText

                            return (
                                <View style={cellStyle}>
                                    <TouchableOpacity
                                        onPress={() => boardSpacePressAction(index)}
                                        activeOpacity={1}
                                    >
                                        <Text style={textStyle}>{value}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    }
                    numColumns={3}
                />
                <Reset resetGame={this.props.resetGame}></Reset>
                <View style={styles.container}>
                    <Button
                        title={"Go to History"}
                        // @ts-ignore
                        onPress={() => this.props.navigation.navigate('History')}
                    >
                    </Button>
                </View>
            </View>
        )
    }
};


const styles = StyleSheet.create({
    container: container,
    header: header,
    rowItem: {
            backgroundColor: '#4D243D',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            margin: 1,
            height: Dimensions.get('window').width / 3,
        },
        winningRowItem: {
            backgroundColor: '#cef442',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            margin: 1,
            height: Dimensions.get('window').width / 3,
        },
        itemText: {
            color: 'white',
            fontSize: 60,
        },
        winItemText: {
            color: '#4D243D',
            fontSize: 60,
        }
    });
