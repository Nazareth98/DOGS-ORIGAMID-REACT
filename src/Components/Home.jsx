import React from 'react'
import styles from './Home.module.css'
import Feed from '../Components/Feed/Feed'


const Home = () => {
  return (
    <section className='container mainContainer'>
      <Feed />
    </section>
  )
}

export default Home