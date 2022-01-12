import { useState } from 'react'

import styled from '@emotion/styled'
import Logo from '../../assets/Logo.jpg'

const Table = styled.table({
    verticalAlign: 'center',
    color: '#000000',
    thead: {
        color: '#000000',
        fontWeight: 'bold',
        backgroundColor: 'gold',
        tr: {
            backgroundColor: 'gold',
            border: '52px solid red'
        }
    },
    tbody:{
        tr: {
            borderBottom: '2px solid gold'
        },
    },
    td: {
        padding: '10px'
    }
})

const AvalicaoScreen = (props) => {
    const Block = (props) => (
        <div>
            <div>
                <img src={Logo} alt="" />
                <form action="">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="range" />
                    <button type="submit">ENVIAR AVALIAÇÃO</button>
                </form>
            </div>
        </div>
    )
    return Block(props);
}



export default function Account() {  
    const [ avalicaoIsOn, setAvalicao ] = useState(false)

    return (
        <div sx={{ width: '90%' }}>
            <Table>
                <thead>
                    <tr>
                        <td>Nome Vinho</td>
                        <td>Vinho / Adega</td>
                        <td>Variedade</td>
                        <td>Ano Colheita</td>
                        <td>Cor</td>
                        <td>Doce ou Seco</td>
                        <td>País de Origem</td>
                        <td>Região</td>
                        <td>Nota</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bom</td>
                        <td>Vinho / Adega</td>
                        <td>Variedade</td>
                        <td>Ano Colheita</td>
                        <td>Cor</td>
                        <td>Doce ou Seco</td>
                        <td>País de Origem</td>
                        <td>Região</td>
                        <td>Nota</td>
                    </tr>
                </tbody>
            </Table>

            <div sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', gap: '10px' }}>
                Nova Avaliação <button onClick={() => setAvalicao(!avalicaoIsOn) } sx={{ width: '40px', height: '40px', padding: '10px' }}>+</button>
            </div>

            { avalicaoIsOn ? <AvalicaoScreen /> : '' }
        </div>
    )
}
