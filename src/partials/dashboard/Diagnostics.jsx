import React,{ useEffect} from 'react'
import { connect } from 'react-redux';
import { loadDiagnostics } from '../../actions/ehr';
import List from '../List';

function Diagnostics({diagnostics,loadDiagnostics}) {

    useEffect(() => {
        loadDiagnostics()
    }, [])

  return (
    <>
        <List data={diagnostics} title="Consultations"/>
    </>
  )
}

const mapStateToProps = state => ({
    diagnostics: state.ehr.diagnostics
});

export default connect(mapStateToProps,{loadDiagnostics}) (Diagnostics)