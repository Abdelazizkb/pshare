import React,{ useEffect} from 'react'
import { connect } from 'react-redux';
import { loadBills } from '../../actions/ehr';
import List from '../List';

function Bills({bills,loadBills}) {

    useEffect(() => {
      loadBills()
    }, [])

  return (
    <>
        <List data={bills} title="Factures"/>
    </>
  )
}

const mapStateToProps = state => ({
    bills: state.ehr.bills
});

export default connect(mapStateToProps,{loadBills}) (Bills)