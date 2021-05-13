import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
    overflow-y: hidden;

    h1 {
        margin-top: 35vh;
        margin-bottom: 5px;
    }

    button {
        margin-top: 5px;
        width: 330px;
        height: 30px;

        border: 0;
        border-radius: 20px;

        background-color: #D8D8D8;
        transition: all ease 1s 0s;
    }

    button:hover {
        background-color: #989898;
    }

    @media (max-width: 360px) {
        h1 {
            font-size: 10vw;
        }

        button {
            width: 70vw;
        }
    }
`

const NotFound = () => (
    <Container>
        <h1 className="information">그르르... 페이지가 없다....</h1>
        <Link to="/"><button className="goBackButton">돌아가기</button></Link>
    </Container>
)

export default NotFound;