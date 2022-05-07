import {
    PATIENTS_LOADED_SUCCESS,BILLS_LOADED_SUCCESS,PRESCRIPTIONS_LOADED_SUCCESS,DIAGNOSTICS_LOADED_SUCCESS,FILES_LOADED_SUCCESS,EHR_LOADED_FAIL
} from '../actions/types'



const initialState={
    "bills":[],
    "files":[],
    "prescriptions":[],
    "diagnostics":[],
    "patients":[],
    "appointment":[]
}

export default function authReducer(state=initialState,action){
 const{type,payload}=action

 switch(type){

    case PATIENTS_LOADED_SUCCESS:
        return {
         ...state,
         patients:payload,
        }
    case DIAGNOSTICS_LOADED_SUCCESS:
        return {
            ...state,
            diagnostics:payload,
        }
    case EHR_LOADED_FAIL:
        return state
    default:
        return state
    }


 }

