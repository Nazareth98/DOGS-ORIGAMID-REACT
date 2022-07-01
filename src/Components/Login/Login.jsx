import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { UserContext } from '../../UserContext'
import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'
import styles from "./Login.module.css"

const Login = () => {
  const {login} = React.useContext(UserContext)
  
  if(login === true) return <Navigate to="/"/>
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />}/>
          <Route path="criar" element={<LoginCreate />}/>
          <Route path="perdeu" element={<LoginPasswordLost />}/>
          <Route path="resetar" element={<LoginPasswordReset />}/>
        </Routes>
      </div>
    </section>
  )
}

export default Login