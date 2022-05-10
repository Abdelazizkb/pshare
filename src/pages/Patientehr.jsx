import React,{useState,useEffect} from 'react'
import DashboardContainer from '../hoc/DashboardContainer'
import Patientprofile from '../partials/Patientprofile'
import file from '../images/file.png'
import prescription from '../images/prescription.png'
import visit from '../images/visit.png'
import bill from '../images/bill.png'
import calendar from '../images/calendar.png'
import Datatypes from '../partials/Datatypes'
import { loadPatient } from '../actions/ehr'
import {connect} from 'react-redux'
import {useParams} from 'react-router-dom'
import List from '../partials/List'

const elements =[
    {
      title:"Consultations",
      image: visit
    },
    {
      title:"Factures",
      image: bill
    },
    {
      title:"Ordonnances",
      image: prescription
    },
    {
      title:"Fichiers",
      image: file
    },
    {
      title:"Rendez-vous",
      image: calendar
    },
  ]
function Patientehr({patient,loadPatient}) {
    const {inn} = useParams();
    const [show, setShow] = useState(0)
    const tables = (patient!==null)?[patient.diagnostics,patient.bills,patient.prescriptions,patient.files,patient.appointments]:[]

  useEffect(() => {
    loadPatient(inn)
  }, [inn])
  
  return (
  <DashboardContainer>
    <Patientprofile/>
    <Datatypes data={elements} handleClick={setShow}/>
    {(tables.length!=0)?<List data={tables[show]} title="ccc"/>:<div>...</div>}
  </DashboardContainer>
  )
}

const mapStateToProps = state => ({
    patient: state.ehr.patient
})

export default connect(mapStateToProps,{loadPatient}) (Patientehr)