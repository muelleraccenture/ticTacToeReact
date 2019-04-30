import {Action} from "redux";
import {GameStatus, MoveState, Space} from "../state/MoveState";
import {DEFAULT_STATE} from "../state/defaultState";
import {changeSymbolAction} from "../action/ChangeSymbolAction";
import {isAction} from "../action/action-utils";
import {resetGameAction} from "../action/ResetGameAction";
import {BoardState} from "../state/BoardState";
import {jumpToMoveAction} from "../action/JumpToMoveAction";

export const boardReducer = (previousState: BoardState = DEFAULT_STATE.boardState, action: Action): BoardState => {

     if(isAction(changeSymbolAction, action)) {
        const history = previousState.history.slice(0, previousState.stepNumber + 1)
        const currentMove = history[history.length - 1]

        const {index: targetIndex} = action
        const {data, playerTurn, currentMoveIndex} = updateForTurn(currentMove.data, currentMove.playerTurn, targetIndex)
        const {data: dataUpdatedForTurn, gameStatus} = determineIfGameComplete(data)

        const newHistory: MoveState[] = [{playerTurn: playerTurn, data: dataUpdatedForTurn, gameStatus, currentMoveIndex: currentMoveIndex}]
        return {...previousState, history: [...history, ...newHistory], stepNumber: previousState.stepNumber + 1}
     }

    if(isAction(resetGameAction, action)) {
        return DEFAULT_STATE.boardState
    }

    if(isAction(jumpToMoveAction, action)) {
        const {index} = action
        return {...previousState, stepNumber: index}
    }

  return previousState
};

const updateForTurn = (previousSpaces: Space[],
                       previousPlayer: string,
                       targetIndex: number): {data: Space[], playerTurn: string, currentMoveIndex: number} => {

    if (previousSpaces[targetIndex].value === undefined) {
        const currentPlayer = previousPlayer == 'X' ? 'O' : 'X'

        const newData: Space[] = previousSpaces.map((space, index) => {
            if (index == targetIndex) {
                return {...space, value: currentPlayer}
            }
            return space
        })

        return {data: newData, playerTurn: currentPlayer, currentMoveIndex: targetIndex}

    }
    return {data: previousSpaces, playerTurn: previousPlayer, currentMoveIndex: targetIndex - 1}
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



