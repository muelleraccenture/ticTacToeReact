import {connect, MapDispatchToPropsFunction, MapStateToProps} from "react-redux";
import {AppState} from "../../store/state/AppState";
import {History, HistoryStateProps} from "../presentation/History";
import {jumpToMoveAction} from "../../store/action/JumpToMoveAction";

export const mapStateToProps: MapStateToProps<HistoryStateProps, void, AppState> = (state) => {
    return state
};

export const mapDispatchToProps: MapDispatchToPropsFunction<void, void> = (dispatch) => ({
    jumpToMove: (index: number) => dispatch(jumpToMoveAction({index})),
});

export const HistoryContainer = connect(mapStateToProps, mapDispatchToProps)(History);
