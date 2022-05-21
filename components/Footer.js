import useItems from "../context/ItemContext";
import styled from "styled-components";

export default function Footer() {
    const { items } = useItems()

    return (
        <Wrapper>
            <h3>More deals coming later!</h3>

        </Wrapper>
    )
}

const Wrapper = styled.footer`
    background-color: lightgreen;
    padding: 20px 10%;
    padding-bottom: 10px;
`

const ProductList = styled.ol`
    list-style: none;
    margin: 0;
    padding: 0;
`
