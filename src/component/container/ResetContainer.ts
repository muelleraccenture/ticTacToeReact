import {connect, MapDispatchToPropsFunction} from "react-redux";
import {resetGameAction} from "../../store/action/ResetGameAction";
import {Reset, ResetStateDispatchProps} from "../presentation/Reset";

export const mapDispatchToProps: MapDispatchToPropsFunction<ResetStateDispatchProps, void> = (dispatch) => ({
    onPress: () => dispatch(resetGameAction({})),
});

export const ResetContainer = connect(null, mapDispatchToProps)(Reset);
