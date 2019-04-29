import {connect, MapDispatchToPropsFunction, MapStateToProps} from "react-redux";
import {AppState} from "../../store/state/AppState";
import {History, HistoryStateProps} from "../presentation/History";

export const mapStateToProps: MapStateToProps<HistoryStateProps, void, AppState> = (state) => {
    return state
};

export const mapDispatchToProps: MapDispatchToPropsFunction<void, void> = (dispatch) => ({
});

export const HistoryContainer = connect(mapStateToProps, mapDispatchToProps)(History);
