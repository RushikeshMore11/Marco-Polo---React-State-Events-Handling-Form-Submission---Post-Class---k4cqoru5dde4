import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseValue, increaseValue } from '../redux/Actions';

const Counter = () => {
    const {count} = useSelector(state=>state.counterReducer);
    const dispatch = useDispatch();
    const data = useSelector(state=>state.inputReducer);
    console.log(data);
    return (
        <>
        <div className='counterHolder'>
            <p><button className='cntBtn' onClick={()=>{dispatch(increaseValue())}}>INCREMENT</button></p>
            <p className='actualCount'>Count is {count}</p>
            <p><button className='cntBtn' onClick={()=>{dispatch(decreaseValue())}}>DECREMENT</button></p>
        </div>
    </>
  )
}

export default Counter