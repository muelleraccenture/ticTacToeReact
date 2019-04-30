import {Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {BoardState} from "../../store/state/BoardState";
import {MoveState} from "../../store/state/MoveState";

export interface HistoryStateProps {
    readonly boardState: BoardState
}

export interface HistoryStateDispatchProps {
    readonly jumpToMove: (index: number) => void,
}

export class History extends React.Component<HistoryStateProps & HistoryStateDispatchProps> {

    render() {
        const moveStateHistory = this.props.boardState.history

        return (
            <View>
                <Button
                    title={"Back To Home"}
                    // @ts-ignore
                    onPress={() => this.props.navigation.navigate('Home')}
                >
                </Button>

                <View style={styles.container}>
                    <FlatList
                        style={styles.list}
                        data={moveStateHistory}
                        renderItem={
                            ({item, index}) => {
                                const rowText = determineColumnAndRowText(item)

                                const buttonText = index == 0 ?
                                    <Text style={styles.listItem}>{"Go To Start"}</Text> :
                                    <Text style={styles.listItem}>{item.playerTurn + " " + rowText}</Text>

                                return (
                                    <TouchableOpacity
                                        onPress={
                                            () => {
                                                this.props.jumpToMove(index)
                                                this.props.navigation.navigate('Home')
                                            }
                                        }
                                        // onPress={() => this.props.navigation.navigate('History')}

                                    >
                                        {buttonText}
                                    </TouchableOpacity>
                                )
                            }
                        }
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        )
    }
}

const determineColumnAndRowText = (move: MoveState): string => {
    let col;
    const index = move.currentMoveIndex
    if (index === 0 || index === 3 || index === 6) {
        col = 1;
    } else if (index === 1 || index === 4 || index === 7) {
        col = 2;
    } else if (index === 2 || index === 5 || index === 8) {
        col = 3;
    }

    let row = 0;
    if (index >= 0) {
        row++;
    }
    if (index > 2) {
        row++;
    }
    if (index > 5) {
        row++;
    }

    return "column: " + col + " row: " + row
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        marginTop: 50,
    },
    listItem: {
        fontSize: 20,
        marginTop: 30,
        backgroundColor: '#4D243D',
        color: 'white',
        fontWeight: 'bold'
    }
})
