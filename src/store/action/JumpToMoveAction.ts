import {createActionFactory} from "./action-utils";

export interface JumpToMoveAction {
    readonly index: number,
}

export const jumpToMoveAction = createActionFactory<JumpToMoveAction>("JUMP_TO_MOVE_ACTION")
