import { useState } from 'react'

import Account from './Account'
import Orders from './Orders'
import Wishlist from './Wishlist'

export const UserAccount = () => {
    const [page, setPage] = useState('Wishlist');

    const Pages = { Account,Orders,Wishlist };

    return (
        <div sx={{ width: '100%', height: '80vh', display: 'grid', gridTemplateColumns: '30vw 1fr' }}>
            <nav sx={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', minWidth: '100px',  justifyContent: 'center', padding:'20px', gap:'10px' }} >
                <button onClick={() => setPage('Account')}>Minha Conta</button>
                <button onClick={() => setPage('Orders')}>Minha lista</button>
                <button onClick={() => setPage('Wishlist')}>Minhas compras</button>
                <button onClick={() => setPage('')}>Sign Out</button>
            </nav>
            <section>
                { ( Pages[page] || Account )() }
            </section>
        </div>
    )
}
