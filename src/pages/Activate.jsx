import React,{useState,useEffect} from 'react'
import {Navigate ,Link,useParams} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from "axios"

function Activate({isAuthenticated}) {
  const [card, setcard] = useState(false)
  const show = (card) ? <Done/> : <Spin/>
  const {uid,token} = useParams();
  const oneTime=null

  const verify = async (uid, token) => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const body = JSON.stringify({ uid, token });

        const res = await axios.post(`http://localhost:8000/auth/users/activation/`, body, config)
            .then(
                res => {console.log(res)
                        setcard(true)
                        return res},
            )
            .catch(
                err => {console.log(err)
                        return err },
            );
    }


  useEffect(() => {
    verify(uid, token)
  }, [])

  if (isAuthenticated)
    return <Navigate  to='/doctor' />;
  return (
      <>
        {show}
      </>
  )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect(mapStateToProps,null) (Activate)

function Done(){
    return (<div className="fixed top-0 left-0 w-full h-screen bg-white flex  items-center justify-center">
                <svg className="inline mr-2 w-20 h-20  fill-bgreen" viewBox="0 0 24 24" id="d9090658-f907-4d85-8bc1-743b70378e93" data-name="Livello 1" xmlns="http://www.w3.org/2000/svg">
                    <path id="70fa6808-131f-4233-9c3a-fc089fd0c1c4" data-name="done circle" d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM11.52,17L6,12.79l1.83-2.37L11.14,13l4.51-5.08,2.24,2Z"/>
                </svg>
                <div className="font-bold text-xl mx-2">Votre compte a été activé , <Link to="/login" className="text-bgreen font-medium">S’identifier</Link></div>
            </div>)
}

var Spin=()=>{
    return (<div className="fixed top-0 left-0 w-full h-screen bg-white flex  items-center justify-center">
                <svg role="status" className="inline mr-2 w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-bgreen" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <div className="font-bold text-xl mx-2">Activation de votre compte...</div>
            </div>)
}

