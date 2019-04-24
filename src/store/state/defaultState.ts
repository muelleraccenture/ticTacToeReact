import {AppState} from "./AppState";

const data = [
        {key: '1', value: undefined, win: false},
        {key: '2', value: undefined, win: false},
        {key: '3', value: undefined, win: false},
        {key: '4', value: undefined, win: false},
        {key: '5', value: undefined, win: false},
        {key: '6', value: undefined, win: false},
        {key: '7', value: undefined, win: false},
        {key: '8', value: undefined, win: false},
        {key: '9', value: undefined, win: false}
    ];

export const DEFAULT_STATE: AppState = {
    boardState: {
        boardName: 'foo',
        playerTurn: 'O',
        data: data,
        gameComplete: false,
    }
};
