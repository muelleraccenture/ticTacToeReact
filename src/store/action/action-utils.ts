import {Action} from "redux";

export interface ActionFactory<T> {
    (parameters: T): Action & T

    readonly _type: string
}

export const createActionFactory = <T>(type: string): ActionFactory<T> => {
    const factory = (parameters: T) => ({type, ...parameters})
    factory._type = type
    return factory
};

export const isAction = <T>(factory: ActionFactory<T>, action: Action | T): action is T => {
    return (action as Action).type === factory._type
}
