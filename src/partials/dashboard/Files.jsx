import React,{ useEffect} from 'react'
import { connect } from 'react-redux';
import { loadFiles } from '../../actions/ehr';
import List from '../List';

function Files({files,loadFiles}) {

    useEffect(() => {
        loadFiles()
    }, [])

  return (
    <>
        <List data={files} title="Fichier"/>
    </>
  )
}

const mapStateToProps = state => ({
    files: state.ehr.files
});

export default connect(mapStateToProps,{loadFiles}) (Files)