import {Action} from "redux";
import {GameStatus, MoveState, Space} from "../state/MoveState";
import {DEFAULT_STATE} from "../state/defaultState";
import {changeSymbolAction} from "../action/ChangeSymbolAction";
import {isAction} from "../action/action-utils";
import {resetGameAction} from "../action/ResetGameAction";
import {AppState} from "../state/AppState";
import {BoardState} from "../state/BoardState";

export const boardReducer = (previousState: BoardState = DEFAULT_STATE.boardState, action: Action): BoardState => {

    const currentMove = previousState.history[previousState.history.length - 1]

     if(isAction(changeSymbolAction, action)) {
        const {index: targetIndex} = action
        const {data, playerTurn} = updateForTurn(currentMove.data, currentMove.playerTurn, targetIndex)
        const {data: dataUpdatedForTurn, gameStatus} = determineIfGameComplete(data)

        const newHistory = [{playerTurn: playerTurn, data: dataUpdatedForTurn, gameStatus}]
        return {...previousState, history: [...previousState.history, ...newHistory]}
     }

    if(isAction(resetGameAction, action)) {
        return DEFAULT_STATE.boardState
    }

  return previousState
};

const updateForTurn = (previousSpaces: Space[],
                       previousPlayer: string,
                       targetIndex: number): {data: Space[], playerTurn: string} => {

    if (previousSpaces[targetIndex].value === undefined) {
        const currentPlayer = previousPlayer == 'X' ? 'O' : 'X'

        const newData: Space[] = previousSpaces.map((space, index) => {
            if (index == targetIndex) {
                return {...space, value: currentPlayer}
            }
            return space
        })

        return {data: newData, playerTurn: currentPlayer}

    }
    return {data: previousSpaces, playerTurn: previousPlayer}
}

const determineIfGameComplete = (previousSpaces: Space[]): {data: Space[], gameStatus: GameStatus} => {

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

        if (previousSpaces[firstIndex].value &&
            previousSpaces[firstIndex].value === previousSpaces[secondIndex].value &&
            previousSpaces[firstIndex].value === previousSpaces[thirdIndex].value)
        {
            const newSpaces = colorizeWinningRow(previousSpaces, [firstIndex, secondIndex, thirdIndex])
            return {data: newSpaces, gameStatus: GameStatus.Winner}
        }
    }

    let allCellsDefined = true

    previousSpaces.forEach(space => {
        if (!space.value) allCellsDefined = false
    })

    if (allCellsDefined) {
        return {data: previousSpaces, gameStatus: GameStatus.CatsGame}
    }

    return {data: previousSpaces, gameStatus: GameStatus.InProgress}
}

const colorizeWinningRow = (previousSpaces: Space[], winningRow: number[]): Space[] => {
    const newSpaces: Space[] = previousSpaces.map((space, index) => {
        if (index == winningRow[0] || index == winningRow[1] || index == winningRow[2]) {
            return { ...space, win: true}
        }
        return space
    })

    return newSpaces
}



