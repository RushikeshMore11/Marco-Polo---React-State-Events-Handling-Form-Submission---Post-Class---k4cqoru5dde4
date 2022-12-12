import { DECREMENT, INCREMENT } from "./ActionTypes";

const initialCount = {
    count:0
};

export const counterReducer = (state=initialCount,action)=>{
    switch(action.type){
        case INCREMENT:
            return {...state,count:state.count+1}
        case DECREMENT:
            return{...state,count:state.count-1} 
        default : return state       
    }
};
const initialArray = [];
export const inputReducer = (state=initialArray,action)=>{
    switch(action.type){
        default : return state;
    }
}