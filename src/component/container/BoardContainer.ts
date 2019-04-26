import {connect, MapDispatchToPropsFunction, MapStateToProps} from "react-redux";
import {Board, BoardStateDispatchProps, BoardStateProps} from "../presentation/Board";
import {AppState} from "../../store/state/AppState";
import {changeSymbolAction} from "../../store/action/ChangeSymbolAction";
import {resetGameAction} from "../../store/action/ResetGameAction";

export const mapStateToProps: MapStateToProps<BoardStateProps, void, AppState> = (state) => {
   return state
};

export const mapDispatchToProps: MapDispatchToPropsFunction<BoardStateDispatchProps, void> = (dispatch) => ({
    onPress: (index: number) => dispatch(changeSymbolAction({index})),
    resetGame: () => dispatch(resetGameAction({})),
});

export const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

