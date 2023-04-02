import Link from "next/link"
import styled from "styled-components"

export const Container = styled.div`
    height: 100vh;
    width: 100vw;

    border: 1px solid red;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LinksDiv = styled.div`
    display: flex;
    gap: 16px;
`

export const StyledLink = styled(Link)`
    padding: 10px 20px;
    border-radius: 50px;
    background-color: #efefef;

    transition: 200ms;

    :hover {
        transform: scale(1.05);
    }
`