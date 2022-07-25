import {legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer"

const cur_State={
        count:0,
        list :[1,2,3,4,5,6,7]
    }

export const store = createStore (reducer, cur_State );