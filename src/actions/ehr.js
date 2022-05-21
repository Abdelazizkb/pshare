import {
    PATIENTS_LOADED_SUCCESS,PATIENT_LOADED_SUCCESS,BILLS_LOADED_SUCCESS,
    PRESCRIPTIONS_LOADED_SUCCESS,DIAGNOSTICS_LOADED_SUCCESS,
    FILES_LOADED_SUCCESS,EHR_LOADED_FAIL,ALLEHR_LOADED_SUCCESS
} from './types'

import axios from "axios"
import {DOMAIN} from './auth.js'

export const loadPatient = (inn) => async (dispatch) => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${DOMAIN}/ehr/patient/${inn}`, config);

        dispatch({
            type:PATIENT_LOADED_SUCCESS,
            payload: res.data
        })
    }
    catch (err) {
        console.log(err)
        dispatch({
            type: EHR_LOADED_FAIL,
        })
    }
}

export const loadPatients = () => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${DOMAIN}/ehr/patients/`, config);
        dispatch({
            type: PATIENTS_LOADED_SUCCESS,
            payload: res.data
        })
    }
    catch (err) {
        dispatch({
            type: EHR_LOADED_FAIL,
        })
    }

}


export const loadEhr = (type,reducerAction) => async (dispatch) => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${DOMAIN}/ehr/${type}`, config);

        dispatch({
            type:reducerAction,
            payload: res.data
        })
    }
    catch (err) {
        dispatch({
            type: EHR_LOADED_FAIL,
        })
    }

}

export const loadBills = () => async (dispatch) =>{
    dispatch(loadEhr("bill",BILLS_LOADED_SUCCESS))
}

export const loadFiles = () => async (dispatch) =>{
    dispatch(loadEhr("file",FILES_LOADED_SUCCESS))
}

export const loadPrescriptions = () => async (dispatch)=>{
    dispatch(loadEhr("prescription",PRESCRIPTIONS_LOADED_SUCCESS))
}

export const loadDiagnostics = () => async (dispatch)=>{
    dispatch(loadEhr("diagnostic",DIAGNOSTICS_LOADED_SUCCESS))
}


export const loadAllehr = (data) => async (dispatch)=>{
    dispatch({
        type : ALLEHR_LOADED_SUCCESS,
        payload : data
    })
}