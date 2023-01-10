import { DECREMENT, INCERMENT, RESET } from "../constants/counterConstants"

const initialCOunter={count:0}
export const counterReduser=(state=initialCOunter,action)=>{
  switch(action.type){
    case INCERMENT:
      return {
        ...state,
        count:state.count+1
      };
  
  case DECREMENT:
      return {
        ...state,
        count:state.count-1
      };
  
  case RESET:
      return {
        ...state,
        count:0,
      };
      default:
       return state
  }
}