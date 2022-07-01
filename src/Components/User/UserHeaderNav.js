import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import { UserContext } from '../../UserContext'
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg'
import { ReactComponent as Estatisticas } from '../../Assets/estatisticas.svg'
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg'
import { ReactComponent as Sair } from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'
import './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia'

const UserHeaderNav = () => {
    const {userLogout} =React.useContext(UserContext)
    const mobile = useMedia('(max-width: 40rem)')
    const [mobileMenu, setMobileMenu] = React.useState(false)
    
    const {pathname} = useLocation()
    React.useEffect(() => {
        setMobileMenu(false)
    }, [pathname])

  return (
    <>  
        {mobile && <button aria-label='Menu' className={`${mobileMenu && styles.mobileButtonActive} ${styles.mobileButton}`} onClick={() => setMobileMenu(!mobileMenu)}></button>}    
        <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
            <NavLink to='/conta' end className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
                <MinhasFotos />
                {mobile && 'Minhas Fotos'}
            </NavLink>
            <NavLink to='/conta/estatisticas' className={({isActive}) => isActive ? 'active' : ""}>
                <Estatisticas />
                {mobile && 'Estatísticas'}
            </NavLink>
            <NavLink to='/conta/postar' className={({isActive}) => isActive ? 'active' : ""}>
                <AdicionarFoto />
                {mobile && 'Adicionar Fotos'}

            </NavLink>
            <button onClick={userLogout}>
                <Sair/>
                {mobile && 'Sair'}
            </button>
        </nav>
    </>
  )
}

export default UserHeaderNav