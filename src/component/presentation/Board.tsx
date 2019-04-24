import React from "react"
import {Dimensions, FlatList, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {Space} from "../../store/state/BoardState";
import {ResetContainer} from "../container/ResetContainer";
import {container} from "../../styles/base";
import {PlayerTurn} from "./PlayerTurn";
import {Win} from "./Win";

export interface BoardStateProps {
    readonly data: Space[],
    readonly playerTurn: string,
    readonly gameComplete: boolean,
}

export interface BoardStateDispatchProps {
    readonly onPress: (index: number) => void,
}

export const Board = ({data, playerTurn, gameComplete, onPress}: BoardStateProps & BoardStateDispatchProps) => {

    const headerElement = gameComplete ? <Win playerTurn={playerTurn}/> : <PlayerTurn playerTurn={playerTurn}/>
    const boardSpacePressAction = gameComplete ? (i: number) => undefined : (i: number) => onPress(i)

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
