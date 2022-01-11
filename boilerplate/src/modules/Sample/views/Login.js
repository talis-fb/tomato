import { Input } from '@tomato/components'

export const Login = (props) => {
    return(
        <div 
            sx={{ 
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'grey'
            }}
        >
            <div
                sx={{ 
                    // position: 'relative',
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
                <img src="" alt="" />
                <span>Welcome to winexperience</span>
                <h2>Sign In</h2>
                <form action="">
                    <label htmlFor="email">Email</label>
                    {/* <Input /> */}
                    <input sx={{ width: '100%'}} type="" id="email" />
                    <label htmlFor="senha">Senha</label>
                    {/* <Input /> */}
                    <input sx={{ width: '100%'}} type="" id="senha" />
                </form>

                <a href="">
                    <h2>Dont have an account? Sign Up</h2>
                </a>
            </div>
        </div>
    )
}
