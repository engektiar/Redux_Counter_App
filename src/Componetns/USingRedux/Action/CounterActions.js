import {DECREMENT, INCERMENT, RESET} from "../constants/counterConstants"
 
 export const incrementCounter=()=>{
  return {
    type:INCERMENT
  }
 }
 export const decrementCounter=()=>{
  return {
    type:DECREMENT
  }
 }
 export const recrementCounter=()=>{
  return {
    type:RESET
  }
 }