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

                        return (
                            <View style={styles.item}>
                                <TouchableHighlight
                                    onPress={() => boardSpacePressAction(index)}
                                    underlayColor={styles.item.backgroundColor}
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
