import React from 'react'
import styles from './Home.module.css'
import Feed from '../Components/Feed/Feed'
import Loading from './Helper/Loading'
import Head from '../Components/Helper/Head'


const Home = () => {
  
  return (
    <section className='container mainContainer'>
      <Head title="Fotos" description="Home do site dogs, com o feed de"/>
      <Feed />
    </section>
  )
}

export default Home