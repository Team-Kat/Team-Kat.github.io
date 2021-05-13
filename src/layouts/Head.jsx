import React from "react";
import styled from "styled-components";

import Zoom from "react-reveal/Zoom";

import image from "../../public/img/teamkat.png";

const HeadContainer = styled.div`
    width: 100vw;
    height: 95vh;

    margin-bottom: 5vh;

    text-align: center;
    animation: dropdiv 1s;

    border-bottom-left-radius: 70%;
    border-bottom-right-radius: 70%;

    background-color: #3a9ad9;
    color: white;

    .logo {
        width: 80px;
        height: 100px;

        margin-top: 20vh;
        margin-bottom: 1px;
    }

    h1 {
        margin-top: 1px;
        margin-bottom: 3px;
    }


    @keyframes dropdiv {
        0% {
            height: 80vh;
            border-bottom-left-radius: 100px;
            border-bottom-right-radius: 100px;
        }

        100% {
            height: 95vh;
            border-bottom-left-radius: 70%;
            border-bottom-right-radius: 70%;
        }
    }
`

const Head = () => (
    <HeadContainer>
        <Zoom top>
            <img className="logo" src={image} />
            <h1>Team Kat</h1>
        </Zoom>
    </HeadContainer>
)

export default Head;