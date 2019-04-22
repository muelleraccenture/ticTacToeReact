export interface BoardState {
    readonly boardName: string,
    readonly playerTurn: string,
    readonly data: Space[],
}

export type Space = {key: string, value: string | undefined}
