import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, recrementCounter } from './USingRedux/Action/CounterActions';

export const Counter = () => {
  const count =useSelector((state)=>state.count)
 const dispatch=useDispatch();
 const handelIncerment=()=>{
  dispatch(incrementCounter())
 }

 const handelDercrement=()=>{
  dispatch(decrementCounter());
 }  

 const handelReset =()=>{
  dispatch(recrementCounter());
 }
  return (
    <div> 
    <h1>Couter : {count}</h1>
    <button onClick={handelIncerment}>Increment </button> <br></br>
    <br></br>
    <button onClick={handelDercrement}>decrement </button><br></br>
    <br></br>
    <button onClick={handelReset}>Reset </button><br></br>
    
    </div>
  )
}
