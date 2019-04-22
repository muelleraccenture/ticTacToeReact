import {connect, MapDispatchToPropsFunction, MapStateToProps} from "react-redux";
import {Board, BoardStateDispatchProps, BoardStateProps} from "../presentation/Board";
import {AppState} from "../../store/state/AppState";
import {changeSymbolAction} from "../../store/action/ChangeSymbolAction";

export const mapStateToProps: MapStateToProps<BoardStateProps, void, AppState> = (state) => {
   return state.boardState
};

export const mapDispatchToProps: MapDispatchToPropsFunction<BoardStateDispatchProps, void> = (dispatch) => ({
    onPress: (index: number) => dispatch(changeSymbolAction({index})),
});

export const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);
