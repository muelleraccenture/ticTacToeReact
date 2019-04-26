import {MoveState} from "./MoveState";

export interface BoardState {
    readonly history : MoveState[],
    readonly stepNumber: number,
    readonly boardName: string,
}
