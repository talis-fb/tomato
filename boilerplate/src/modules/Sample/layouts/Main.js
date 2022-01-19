import { useState } from 'react'
import Logo from '../assets/Logo.jpg'
import { Login } from '../views/Login'

import { useSelector } from "react-redux";

import { Link } from 'react-router-dom'


const styles ={
    flex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgs: {
        height: '100%',
    },
    fullSize: {
        height: '100%',
        width: '100%',
    }
}



export const Main = ({ children, ...props }) => {
    const [ loginOn,setLoginOn ] = useState(0);

    const store = useSelector( state => state["products"] )
    const numberProducts = Object.values(store).length

    console.log('store')
    console.log(store)

    return (
        <div sx={{
            position: 'relative',
            display: 'block', width: '100%',
            height: '100%',
            top: '0px',
            left: '0px',
        }}>
            <header 
                sx={{ 
                    ...styles.flex,
                    justifyContent: 'space-between',
                    // position: 'relative',
                    width: '100%',
                    height: '90px',
                    padding: '10px',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    backgroundColor: '#ffffff',
                    borderBottom: '2px solid grey',
                    a:{
                        textDecoration: 'none',
                        color: '#111111'
                    }
                }}
            >
                <div sx={{ ...styles.flex, ...styles.imgs, gap:'20px' }}>
                    <Link to="/" sx={{ height: '100%' }} ><img sx={styles.imgs} src={ Logo } alt="" /></Link>

                    <Link to="/shop" sx={{...styles.imgs, ...styles.flex}}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" viewBox="0 0 16 16"> <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/> </svg>
                        Shop
                    </Link>
                </div>

                <div sx={{ ...styles.flex, ...styles.imgs, gap:'20px'}}>
                    <Link to="/bag">
                    <div sx={{ backgroundColor: '#AAAAAA55', padding: '5px', borderRadius: '5px'}}> 
                        {numberProducts} 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> </svg>
                    </div>
                    </Link>
                    <a onClick={ () => setLoginOn( 1 ) }> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-square" viewBox="0 0 16 16"> <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/> <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/> </svg>
                        Signup/Login
                    </a>
                </div>
            </header>

            <main sx={{ width:'100%', mx:'auto' }}>
                { loginOn ? <Login closeWindow={ () => setLoginOn(0) } /> : '' }
                {children}
            </main>
        </div>
    )
}
