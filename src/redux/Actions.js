import { DECREMENT, INCREMENT } from "./ActionTypes"

export const increaseValue = (data)=>dispatch =>{
    return(dispatch({
        type:INCREMENT,
        payload : data
    }
    ))
};
export const decreaseValue = data =>dispatch=>{
    return(dispatch(
        {
            type:DECREMENT,
            payload:data
        }
    ))
};