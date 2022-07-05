import React from 'react'
import { UserContext } from '../../UserContext'
import { Route, Navigate, Routes } from 'react-router-dom';
import UserHeader from './UserHeader';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import NotFound from '../NotFound';


const User = () => {
  const {data} = React.useContext(UserContext)
    const {login} = React.useContext(UserContext)

    if (login === false) return <Navigate to="/login" />

  return (
    <section className='container'>
    <UserHeader />
    <Routes>
      <Route path="/" element={<Feed user={data.id}/>}/>
      <Route path="postar" element={<UserPhotoPost />}/>
      <Route path="estatisticas" element={<UserStats />}/>
      <Route path="*" element={<NotFound />} />

    </Routes>
    </section>
  )
}

export default User