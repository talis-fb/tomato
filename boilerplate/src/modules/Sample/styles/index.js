import styled from '@emotion/styled'

import { Flex, Card, Text, Image  } from '@tomato/components'
import { Link } from 'react-router-dom'

const colors = {
    red: '#b10242',
    green: '#56cb6c',
    black: '#231f20',
    white: '#e2e2e2',
    mainBrown: '#af986f',
    lightBrown: '#f1cd8f',
}

const Button = styled.button({
    backgroundColor: colors.black,
    borderRadius: '5px',
    color: colors.white,
    border: 'none',
    padding: '10px',
    minHeight: '50px',
    boxShadow: '1px solid black'
})

const ButtonOutline = styled.button({
    backgroundColor: colors.white,
    borderRadius: '5px',
    color: colors.black,
    border: `2px solid ${colors.black}`,
    padding: '10px',
    minHeight: '50px',
    boxShadow: '1px solid black'
})

const ProductCard = ({ name, price }) => {
    const Div =  styled.div({
        display: 'flex',
        flexWrap: 'wrap',
    })

    const product = {}

    return (
        <Div>
            <Card
                justifyContent="space-between"
                sx={{
                    width: "100%",
                    height: "300px",
                    justifyContent: "space-between",
                }}
            >
                <Image
                    src={product.img}
                    mx="auto"
                    sx={{ maxWidth: "180px", width: "100px" }}
                />
                <Link
                    key={product.id}
                    style={{
                        textDecoration: "none",
                        fontWeight: "semibold",
                        fontSize: "14px",
                        textAlign: "center",
                    }}
                    to={`/product/${product.id}`}
                >
                    <Text>{name}</Text>
                </Link>

                <Flex mx="auto" sx={{ alignItems: "baseline" }}>
                    <Text ml="auto" sx={{ fontWeight: "semibold", fontSize: "13px" }}>
                        apenas
                    </Text>
                    <Text
                        ml="4px"
                        color="red"
                        sx={{ fontWeight: "bold", fontSize: "18px" }}
                    >
                        R$ {price}
                    </Text>
                </Flex>
            </Card>

            <Button
                my="16px"
                sx={{ cursor: "pointer", width: "100%" }}
                color="#ffffff"
                onClick={() => {
                    // addToCart(product.id);
                }}
                variant="disabled"
            >
                {"Add"}
            </Button>
        </Div>
    )
}

export { colors, Button, ButtonOutline, ProductCard };
