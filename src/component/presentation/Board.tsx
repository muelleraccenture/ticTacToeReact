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
}

export interface BoardStateDispatchProps {
    readonly onPress: (index: number) => void,
}

export const Board = ({data, playerTurn, onPress}: BoardStateProps & BoardStateDispatchProps) => {

    const complete = gameComplete(data)

    const headerElement = complete ? <Win playerTurn={playerTurn}/> : <PlayerTurn playerTurn={playerTurn}/>
    
    return (
        <View>
            {headerElement}
            <FlatList
                data={data}
                style={styles.container}
                renderItem={
                    ({ item, index }) => {
                        const value = item.value ? String(item.value) : "     "

                        return (
                            <View style={styles.item}>
                                <TouchableHighlight
                                    onPress={() => onPress(index)}
                                >
                                    <Text style={styles.itemText}>{value}</Text>
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
        item: {
            backgroundColor: '#4D243D',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            margin: 1,
            height: Dimensions.get('window').width / 3,
        },
        itemText: {
            color: 'white',
            fontSize: 60,
        }
    });

const gameComplete = (spaces: Space[]): boolean => {

    const winScenerios = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [7, 5, 3]
    ]

    for (let i = 0; i < winScenerios.length; i++) {
        let winScenerio = winScenerios[i]

        const firstIndex = winScenerio[0] - 1
        const secondIndex = winScenerio[1] - 1
        const thirdIndex = winScenerio[2] - 1

        if (spaces[firstIndex].value &&
            spaces[firstIndex].value === spaces[secondIndex].value &&
            spaces[firstIndex].value === spaces[thirdIndex].value)
        {
            return true
        }
    }

    return false
}
