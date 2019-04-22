import {Action} from "redux";
import {BoardState, Space} from "../state/BoardState";
import {DEFAULT_STATE} from "../state/defaultState";
import {changeSymbolAction} from "../action/ChangeSymbolAction";
import {isAction} from "../action/action-utils";

export const boardReducer = (previousState: BoardState = DEFAULT_STATE.boardState, action: Action): BoardState => {

 if(isAction(changeSymbolAction, action)) {
   const {index: targetIndex} = action

   const symbol = previousState.playerTurn == 'X' ? 'O' : 'X'

   const newData = previousState.data.map((space, index) => {
       if (index == targetIndex) {
           return {...space, value: symbol}
       }
       return space
   })

   return {...previousState, data: newData, playerTurn: symbol}
 }

  return previousState
};


