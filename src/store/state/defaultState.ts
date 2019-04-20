import {AppState} from "./AppState";

const data = [
    {key: '1', value: 'blank'},
    {key: '2', value: 'blank'},
    {key: '3', value: 'blank'},
    {key: '4', value: 'blank'},
    {key: '5', value: 'blank'},
    {key: '6', value: 'blank'},
    {key: '7', value: 'blank'},
    {key: '8', value: 'blank'},
    {key: '9', value: 'blank'}
];

export const DEFAULT_STATE: AppState = {
    boardState: {
        boardName: 'foo',
        data: data,
    }
};
