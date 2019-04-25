import {Provider} from "react-redux"
import React from "react"
import {initializeStore} from "../store/store";
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {History} from "./presentation/History";
import {BoardContainer} from "./container/BoardContainer";

export const App = () =>
    <Provider store={initializeStore()}>
        <Navigation />
    </Provider>

const AppNavigator = createStackNavigator(
    {
            Home: BoardContainer,
            History: History
        },
    {initialRouteName: "Home"}
    )

let Navigation = createAppContainer(AppNavigator)
