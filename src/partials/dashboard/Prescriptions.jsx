
import React,{ useEffect} from 'react'
import { connect } from 'react-redux';
import { loadPrescriptions } from '../../actions/ehr';
import List from '../List';

function Prescriptions({prescriptions,loadPrescriptions}) {

    useEffect(() => {
        loadPrescriptions()
    }, [])

  return (
    <>
        <List data={prescriptions} title="Ordonnance"/>
    </>
  )
}

const mapStateToProps = state => ({
    prescriptions: state.ehr.prescriptions
});

export default connect(mapStateToProps,{loadPrescriptions}) (Prescriptions)