import {Provider} from "react-redux"
import React from "react"
import {initializeStore} from "../store/store";
import {View} from "react-native";
import {Board} from "./presentation/Board";
import {BoardContainer} from "./container/BoardContainer";

export const App = () =>
    <Provider store={initializeStore()}>
        <View>
            <BoardContainer></BoardContainer>
        </View>
    </Provider>
