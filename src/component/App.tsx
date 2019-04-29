import {Provider} from "react-redux"
import React from "react"
import {initializeStore} from "../store/store";
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {BoardContainer} from "./container/BoardContainer";
import {HistoryContainer} from "./container/HistoryContainer";

export const App = () =>
    <Provider store={initializeStore()}>
        <Navigation />
    </Provider>

const AppNavigator = createStackNavigator(
    {
            Home: BoardContainer,
            History: HistoryContainer
        },
    {initialRouteName: "Home"}
    )

let Navigation = createAppContainer(AppNavigator)
