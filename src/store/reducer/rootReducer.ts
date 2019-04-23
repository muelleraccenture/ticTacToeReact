import {combineReducers, Reducer} from "redux";
import {boardReducer} from "./boardReducer";
import {AppState} from "../state/AppState";

type RootReducerDefinition<T> = {
    [P in keyof T]: Reducer<any, any>
}

export default combineReducers({
    boardState: boardReducer,
} as RootReducerDefinition<AppState>)
