import { Icon } from '@tomato/components'

const styles ={
    imgs: {
        height: '100%',
    }
}

export const Main = ({ children, ...props }) => {
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
                    position: 'relative',
                    display: 'flex',
                    justifyContent: "space-between",
                    width: '100%',
                    height: '80px',
                    padding: '10px',
                    backgroundColor: 'red',
                    borderBottom: '2px solid grey',
                }}
            >
                <div sx={{display: 'flex', justifyContent: 'center' }}>
                    <a href="/"><img sx={styles.imgs} src="https://pipz.io/shared/1/files/logo_pipz_plataform.png" alt="" /></a>

                    <a href="/shop" sx={styles.imgs}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="100%" fill="currentColor" viewBox="0 0 16 16"> <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/> </svg>
                        Shop
                    </a>
                </div>

                <div>
                    <a href="/login"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-square" viewBox="0 0 16 16"> <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/> <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/> </svg>
                        Signup/Login
                    </a>
                </div>
            </header>

            <main sx={{ width:'100%', mx:'auto' }}>
                {children}
            </main>
        </div>
    )
}
