export interface BoardState {
    readonly boardName: string,
    readonly playerTurn: string,
    readonly data: Space[],
    readonly gameComplete: boolean,
}

export type Space = {key: string, value?: string, win: boolean}
