import {connect, MapDispatchToPropsFunction, MapStateToProps} from "react-redux";
import {AppState} from "../../store/state/AppState";
import {Win, WinStateDispatchProps, WinStateProps} from "../presentation/Win";
import {resetGameAction} from "../../store/action/ResetGameAction";

export const mapStateToProps: MapStateToProps<WinStateProps, void, AppState> = (state) => {
    return state.boardState
};

export const mapDispatchToProps: MapDispatchToPropsFunction<WinStateDispatchProps, void> = (dispatch) => ({
    onPress: () => dispatch(resetGameAction({})),
});

export const WinContainer = connect(mapStateToProps, mapDispatchToProps)(Win);
