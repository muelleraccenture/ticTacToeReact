import React from "react"
import {Button, Dimensions, FlatList, StyleSheet, View, Text} from "react-native";
import {Space} from "../../store/state/BoardState";
import {WinContainer} from "../container/WinContainer";

export interface BoardStateProps {
    readonly data: Space[],
    readonly playerTurn: string,
}

export interface BoardStateDispatchProps {
    readonly onPress: (index: number) => void,
}

export const Board = ({data, playerTurn, onPress}: BoardStateProps & BoardStateDispatchProps) => {

    const complete = gameComplete(data)

    if (complete) {
        return (
            <WinContainer></WinContainer>
        )
    }

    const player = playerTurn == 'X' ? 'O' : 'X'

    return (
    <View>
        <View>
            <Text>
                {"Player " + player + "'s turn"}
            </Text>
        </View>
        <FlatList
            data={data}
            style={styles.container}
            renderItem={
                ({ item, index }) => {

                    return (
                        <View
                            style={styles.item}
                        >
                            <Button
                                title={String(item.value)}
                                onPress={() => onPress(index)}
                            >
                            </Button>
                        </View>
                    )
                }
            }
            numColumns={3}
        />
    </View>
    )
};


const styles = StyleSheet.create({
        container: {
            marginVertical: 20,
        },
        item: {
            backgroundColor: '#4D243D',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            margin: 1,
            height: Dimensions.get('window').width / 3,
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
