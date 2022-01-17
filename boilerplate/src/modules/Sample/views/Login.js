import { Input } from '@tomato/components'
import { Link } from 'react-router-dom'

import Logo from '../assets/Logo.jpg'

export const Login = ({ closeWindow }) => {
    const close = (event) => {
        const element = event.target.id
        if(element == "background-login")
            closeWindow()
    }

    return(
        <div 
            sx={{ 
                position: 'fixed',
                top: '0px',
                left: '0px',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#44444477',
                transition: 'all 2s',
            }}
            id="background-login"
            onClick={ close }
        >
            <div
                sx={{ 
                    // position: 'relative',
                    opacity: '100%',
                    width: '90%',
                    height: '90%',
                    maxWidth: '400px',
                    maxHeight: '500px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#eeeeee',
                    borderRadius: '10px',
                    padding: '20px'
                }}
            >
                {/* <Logo /> */}
                <img src={Logo} height="150" alt="" />
                <span>Bem vindo ao WINEXPERIENCE</span>
                <form action="">
                    <label htmlFor="email">Email</label>
                    {/* <Input /> */}
                    <input sx={{ width: '100%'}} type="" id="email" />
                    <label htmlFor="senha">Senha</label>
                    {/* <Input /> */}
                    <input sx={{ width: '100%'}} type="" id="senha" />

                    <Link onClick={closeWindow} to="/profile"><button>ENTRAR</button></Link>
                    {/* <button>ENTRAR</button> */}
                </form>

                <h2>Dont have an account? <a href="">Sign Up</a></h2>

                <footer>@2022 Winexperiece. Todos os direitos reservados</footer>
            </div>
        </div>
    )
}
