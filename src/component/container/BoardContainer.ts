import {connect, MapDispatchToPropsFunction, MapStateToProps} from "react-redux";
import {Board, BoardStateDispatchProps, BoardStateProps} from "../presentation/Board";
import {AppState} from "../../store/state/AppState";
import {changeSymbolAction} from "../../store/action/ChangeSymbolAction";

export const mapStateToProps: MapStateToProps<BoardStateProps, void, AppState> = (state) => {
    console.log('mapStateToProps');
    console.log( state.boardState);

   return state.boardState
};

export const mapDispatchToProps: MapDispatchToPropsFunction<BoardStateDispatchProps, void> = (dispatch) => ({
    onPress: (symbol: string, index: number) => dispatch(changeSymbolAction({symbol, index})),
});

export const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);
