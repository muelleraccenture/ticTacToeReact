import {AppState} from "./AppState";

const data = [
        {key: '1', value: undefined},
        {key: '2', value: undefined},
        {key: '3', value: undefined},
        {key: '4', value: undefined},
        {key: '5', value: undefined},
        {key: '6', value: undefined},
        {key: '7', value: undefined},
        {key: '8', value: undefined},
        {key: '9', value: undefined}
    ];

export const DEFAULT_STATE: AppState = {
    boardState: {
        boardName: 'foo',
        playerTurn: 'O',
        data: data,
    }
};
