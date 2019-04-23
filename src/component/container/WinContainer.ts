import {connect, MapStateToProps} from "react-redux";
import {AppState} from "../../store/state/AppState";
import {Win, WinStateProps} from "../presentation/Win";

export const mapStateToProps: MapStateToProps<WinStateProps, void, AppState> = (state) => {
    return state.boardState
};

export const WinContainer = connect(mapStateToProps)(Win);
