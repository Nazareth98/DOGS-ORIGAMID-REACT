import React from 'react'
import { PHOTO_DELETE } from '../../api'
import useFetch from '../../Hooks/useFetch'
import styles from './PhotoDelete.module.css'

const PhotoDelete = ({id}) => {
    const {loading, request} = useFetch()


    async function handleClick(event) {
        event.preventDefault()
        const confirm = window.confirm('Temn certeza que deseja deletar?')
        if(confirm){
            const {url, options} = PHOTO_DELETE(id)
            const response = await request(url, options) 
            if (response.ok) window.location.reload()
        }
        
    }


  return (
    <>
        {loading ? <button className={styles.delete} disabled>Deletando..</button> : <button onClick={handleClick} className={styles.delete}>Deletar</button>}

    </>
  )
}

export default PhotoDelete