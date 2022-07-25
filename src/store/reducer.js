import { ADD_CNT,DEC_CNT } from "./actionTypes"



export const reducer = (store, action)=>{

    switch (action.type){
        case ADD_CNT:
            return {
                ...store,
                count : store.count + action.payload
            }
        case DEC_CNT:
            return {
                ...store,
                count : store.count - action.payload
            }

        default:
            return {...store}
    }
}