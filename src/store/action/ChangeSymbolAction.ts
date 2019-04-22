import {createActionFactory} from "./action-utils";

export interface ChangeSymbolAction {
    readonly index: number,
}

export const changeSymbolAction = createActionFactory<ChangeSymbolAction>("CHANGE_SYMBOL_ACTION")
