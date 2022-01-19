// import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getStates  } from '@tomato/components'
import MODULE from '../../Sample'

// import { Card, crud, Flex, Image, Spinner } from "@tomato/components";
// import { Card } from "@tomato/components";
// import Logo from '../assets/Logo.jpg'
import styled from '@emotion/styled'

import {  ButtonOutline, Button } from '../styles'

// const Button = styled.button({
//     border: 'none',
//     padding: '10px',
//     minHeight: '50px',
//     backgroundColor: '#555556',
//     color: '#ffffff',
//     borderRadius: '5px',
//     boxShadow: '1px solid black'
// })

export const Home = () => {
    // const dispatch = useSelector()
    console.log(useSelector( state => state["products"] ))
    console.log(useSelector( state => state ))
    // console.log(getStates(MODULE))
    return (
        <>
            <section sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>

                <div sx={{ display: 'grid', maxWidth: '800px', gridTemplateColumns: '1fr 1fr' }} >
                    <h2 sx= {{ fontSize: '30px' }}>SUAS SENSAÇÕES SÃO ÚNICAS. NÓS NÃO TE DEIXAMOS ESQUECER.</h2>
                    <div>
                        Crie agora a lista de suas melhores experiências
                        <Button>Começar</Button>
                    </div>
                </div>

            </section>

            <section sx={{ width: '100%' }}>
                <div sx={{ maxWidth: '800px',  margin: '0 auto', textAlign: 'center' }} >
                    <h2 sx= {{ fontSize: '30px' }}>Como Funciona? </h2>
                    <div sx={{ display: 'flex' }}>
                        <div>
                            <h3>Criando uma lista de Desejos</h3>
                            <span>Escolha entre centenas de produtos e tendências escolhidas a dedo em nossa adega virtual.</span>
                            <ul>
                                <li>Procure os vinhos mais bem avaliados.</li>
                                <li>Salve em seus favoritos na sua lista de desejos.</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Criando uma lista de Desejos</h3>
                            <span>Escolha entre centenas de produtos e tendências escolhidas a dedo em nossa adega virtual.</span>
                            <ul>
                                <li>Procure os vinhos mais bem avaliados.</li>
                                <li>Salve em seus favoritos na sua lista de desejos.</li>
                            </ul>
                        </div>
                    </div>
                    <Button>CRIE SEU WINE MENU</Button>
                </div>
            </section>

            <section sx={{ width: '100%' }}>
                    <h2 sx= {{ fontSize: '30px' }}>OS MAIS DESEJADOS</h2>
                {/* <Vinhos /> */}
            </section>

            <section sx={{ width: '100%', padding: '20px', textAlign: 'center' }}>
                    <div sx= {{ fontSize: '40px' }}>Comece sua lista de desejos</div>
                    <Button>CRIE SEU WINE MENU</Button>
                {/* <Vinhos /> */}
            </section>
        </>
    )
};
