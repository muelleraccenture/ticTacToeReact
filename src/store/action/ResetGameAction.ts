import {createActionFactory} from "./action-utils";

export interface ResetGameAction {
}

export const resetGameAction = createActionFactory<ResetGameAction>("RESET_GAME_ACTION")
