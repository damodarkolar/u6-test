import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { addCnt, decCnt } from "../store/actions";

export const Home =() =>{

    // const count=0;
    const count=useSelector(state => state.count )
    const list=useSelector(state => state.list)
    const dispatch=useDispatch();

    const handleinc = () => {
        dispatch(addCnt(2))
    }

    const handledec = () => {
        dispatch(decCnt(3))
    }

    return(
        <>
            <div>{count} </div>
            <button onClick={handleinc}>INC</button>
            <button onClick={handledec}>DEC</button>
            {console.log(list)}
            
        </>
        
    )
}
