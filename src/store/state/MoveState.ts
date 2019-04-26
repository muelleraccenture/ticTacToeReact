export interface MoveState {
    readonly playerTurn: string,
    readonly data: Space[],
    readonly gameStatus: GameStatus,
}

export type Space = {key: string, value?: string, win: boolean}

export enum GameStatus {
    InProgress,
    Winner,
    CatsGame
}
