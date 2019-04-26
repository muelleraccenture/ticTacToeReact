import {MoveState} from "./MoveState";

export interface BoardState {
    readonly history : MoveState[],
    readonly boardName: string,
}
