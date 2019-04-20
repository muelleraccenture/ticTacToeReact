import {Action} from "redux";
import {BoardState} from "../state/BoardState";
import {DEFAULT_STATE} from "../state/defaultState";
import {changeSymbolAction} from "../action/ChangeSymbolAction";
import {isAction} from "../action/action-utils";

export const boardReducer = (previousState: BoardState = DEFAULT_STATE.boardState, action: Action): BoardState => {

 if(isAction(changeSymbolAction, action)) {
   const {symbol, index} = action


   // const [first, ...rest] = previousState.data;

   // const newFirst = { ...first, value: symbol};

   // const updateEntry = previousState.data[index]

   previousState.data[index].value = symbol


   //todo is this really the best way to update the array?
   // return {...previousState, data: [newFirst, ...rest]}
   // return {...previousState, data: [updateEntry, ...previousState.data]}

   return {...previousState, data: [...previousState.data]}
 }

  return previousState
};
