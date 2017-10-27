import thunk from "redux-thunk";
import immutable from "immutable";
import reducer from "../reducers/index";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

export const store = createStore(reducer, new immutable.Map(),
   composeWithDevTools(applyMiddleware(thunk)));
