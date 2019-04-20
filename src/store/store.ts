import {createStore} from "redux";
import rootReducer from "./reducer/rootReducer";

export const initializeStore = () => {
    return createStore(rootReducer)
};
