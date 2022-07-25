import { ADD_CNT,DEC_CNT } from "./actionTypes";


export const addCnt = (data)=>{

    return {
        type:ADD_CNT,
        payload:data
    }
}
export const decCnt = (data)=>{

    return {
        type:DEC_CNT,
        payload:data
    }
}