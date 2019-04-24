import {Action} from "redux";
import {BoardState, Space} from "../state/BoardState";
import {DEFAULT_STATE} from "../state/defaultState";
import {changeSymbolAction} from "../action/ChangeSymbolAction";
import {isAction} from "../action/action-utils";
import {resetGameAction} from "../action/ResetGameAction";

export const boardReducer = (previousState: BoardState = DEFAULT_STATE.boardState, action: Action): BoardState => {

     if(isAction(changeSymbolAction, action)) {
        const {index: targetIndex} = action
         //todo change these functions to only take what they need and return
         // an object that can be destructured with the updated properties
        const state = updateSelectedSpace(previousState, targetIndex)
        return determineIfGameComplete(state)
         //todo put last line here putting all the properties back together again as a boardstate
     }

    if(isAction(resetGameAction, action)) {
        return DEFAULT_STATE.boardState
    }

  return previousState
};

const updateSelectedSpace = (previousState: BoardState, targetIndex: number): BoardState => {
    if (previousState.data[targetIndex].value === undefined) {
        const symbol = previousState.playerTurn == 'X' ? 'O' : 'X'

        const newData: Space[] = previousState.data.map((space, index) => {
            if (index == targetIndex) {
                return {...space, value: symbol}
            }
            return space
        })

        return {...previousState, data: newData, playerTurn: symbol}

    }
    return previousState
}

const determineIfGameComplete = (previousState: BoardState): BoardState => {

    const winScenerios = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [7, 5, 3]
    ]

    for (let i = 0; i < winScenerios.length; i++) {
        let winScenerio = winScenerios[i]

        const firstIndex = winScenerio[0] - 1
        const secondIndex = winScenerio[1] - 1
        const thirdIndex = winScenerio[2] - 1

        const spaces = previousState.data

        if (spaces[firstIndex].value &&
            spaces[firstIndex].value === spaces[secondIndex].value &&
            spaces[firstIndex].value === spaces[thirdIndex].value)
        {
            const updateState = colorizeWinningRow(previousState, [firstIndex, secondIndex, thirdIndex])
            return {...updateState, gameComplete: true}
        }
    }

    return previousState
}

const colorizeWinningRow = (previousState: BoardState, winningRow: number[]): BoardState => {
    const newData: Space[] = previousState.data.map((space, index) => {
        if (index == winningRow[0] || index == winningRow[1] || index == winningRow[2]) {
            //todo don't change the value only the win this is for initial test only

            return { ...space, value: 'Z', win: true}
        }
        return space
    })

    return {...previousState, data: newData}
}



