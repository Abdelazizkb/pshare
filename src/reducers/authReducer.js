import {
    LOGIN_FAIL,LOGIN_SUCCESS,USER_LOADED_SUCCESS,USER_LOADED_FAIL,CATEGORIES_LOADED_SUCCESS,CATEGORIES_LOADED_FAIL,LOGOUT
    ,COMPANIES_LOADED_SUCCESS,COMPANIES_LOADED_FAIL,SIGNUP_SUCCESS,ACTIVATION_SUCCESS,ACTIVATION_FAIL
} from '../actions/types'



const initialState={
    "access":localStorage.getItem("access"),
    "refresh":localStorage.getItem("refresh"),
    "user":null,
    "categories":[],
    "companies":[],
    "isAuthenticated":null,
    "signedup":false,
    "activated": false,
}

export default function authReducer(state=initialState,action){
 const{type,payload}=action

 switch(type){

    case LOGIN_SUCCESS:
      localStorage.setItem('access', payload.access);
      localStorage.setItem('refresh', payload.refresh);
       return {
          ...state,
          isAuthenticated: true,
          access: payload.access,
        }
    case USER_LOADED_SUCCESS:
        return {
         ...state,
         user:payload,
         isAuthenticated: true,
        }
    case CATEGORIES_LOADED_SUCCESS:
        return {
            ...state,
            categories: payload,
        }
    case COMPANIES_LOADED_SUCCESS:
        return {
            ...state,
            companies: payload,
        }
    case SIGNUP_SUCCESS:
        return {
            ...state,
            signedup: true,
        }
    case ACTIVATION_SUCCESS:
        return {
            ...state,
            activated: true,
        }
    case ACTIVATION_FAIL:
        return {
            ...state,
            activated: false,
        }
    case COMPANIES_LOADED_FAIL:
    case CATEGORIES_LOADED_FAIL:
    case USER_LOADED_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        return {
            ...state,
            access: null,
            refresh: null,
            isAuthenticated: false,
            user: null
        }

    default:
        return state
    }


 }

