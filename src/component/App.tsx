import {Provider} from "react-redux"
import React from "react"
import {initializeStore} from "../store/store";
import {BoardContainer} from "./container/BoardContainer";

export const App = () =>
    <Provider store={initializeStore()}>
        <BoardContainer></BoardContainer>
    </Provider>
