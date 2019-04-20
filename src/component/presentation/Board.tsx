import React from "react"
import {Button, Dimensions, FlatList, StyleSheet, Text, View} from "react-native";

export interface BoardStateProps {
    readonly data: {key: string, value: string}[]
}

export interface BoardStateDispatchProps {
    readonly onPress: (symbol: string, index: number) => void,
}

export const Board = ({data, onPress}: BoardStateProps & BoardStateDispatchProps) => {

    return (
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
                                onPress={() => onPress('X', index)}
                            >
                            </Button>
                        </View>
                    )
                }
            }
            numColumns={3}
        />
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
