import { useState } from 'React'

import Account from './Account'
import Orders from './Orders'
import Wishlist from './Wishlist'

export default () => {
    const [page, setPage] = useState('Account');

    const Pages = { Account,Orders,Wishlist };

    return (
        <>
            <nav>
                <button onClick={() => setPage('Account')}>Minha Conta</button>
                <button onClick={() => setPage('Orders')}>Minha lista</button>
                <button onClick={() => setPage('Wishlist')}>Minhas compras</button>
                <button onClick={() => setPage('')}>Sign Out</button>
            </nav>
            <section>
                { Pages[page] || Account }
            </section>
        </>
    )
}
