import React from "react"
import {Dimensions, FlatList, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {GameStatus, Space} from "../../store/state/BoardState";
import {ResetContainer} from "../container/ResetContainer";
import {container, header} from "../../styles/base";
import {PlayerTurn} from "./PlayerTurn";
import {Win} from "./Win";

export interface BoardStateProps {
    readonly data: Space[],
    readonly playerTurn: string,
    readonly gameStatus: GameStatus,
}

export interface BoardStateDispatchProps {
    readonly onPress: (index: number) => void,
}

export const Board = ({data, playerTurn, gameStatus, onPress}: BoardStateProps & BoardStateDispatchProps) => {

        let headerElement
        if (gameStatus == GameStatus.Winner) {
            headerElement = <Win playerTurn={playerTurn}/>
        } else if (gameStatus == GameStatus.InProgress) {
            headerElement = <PlayerTurn playerTurn={playerTurn}/>
        } else if (gameStatus == GameStatus.CatsGame) {
            headerElement =
                <View style={styles.container}>
                    <Text style={styles.header}>
                        {"Cats Game"}
                    </Text>
                </View>
        }

    const boardSpacePressAction = gameStatus == GameStatus.Winner
        ? (i: number) => undefined :
        (i: number) => onPress(i)

    return (
        <View>
            {headerElement}
            <FlatList
                data={data}
                style={styles.container}
                renderItem={
                    ({ item, index }) => {
                        const value = item.value ? String(item.value) : "     "
                        const cellStyle = item.win ? styles.winningRowItem : styles.rowItem
                        const textStyle = item.win ? styles.winItemText : styles.itemText
                        const underlayStyle = item.win ? styles.winningRowItem.backgroundColor : styles.rowItem.backgroundColor

                        return (
                            <View style={cellStyle}>
                                <TouchableHighlight
                                    onPress={() => boardSpacePressAction(index)}
                                    underlayColor={underlayStyle}
                                >
                                    <Text style={textStyle}>{value}</Text>
                                </TouchableHighlight>
                            </View>
                        )
                    }
                }
                numColumns={3}
            />
            <ResetContainer></ResetContainer>
        </View>
    )
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
