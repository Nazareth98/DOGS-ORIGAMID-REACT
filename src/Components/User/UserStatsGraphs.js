import React from 'react'
import styles from './UserStatsGraphs.module.css'


const UserStatsGraphs = ({data}) => {
    const [graph, setGrapg] = React.useState([])
    const [total, setTotal] = React.useState(0)

    React.useEffect(()=> {
        setTotal(data.map(({acessos})=> Number(acessos).reduce((a, b) => a+ b)))
    }, [data])


  return (
    <section className={`animeLeft ${styles.graph}`}>
        <div className={styles.total}>
            <p>Acessos: {total}</p>
        </div>
    </section>
  )
}

export default UserStatsGraphs