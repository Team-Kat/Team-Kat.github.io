import React from "react";
import styled from "styled-components";

import image from "../../public/img/teamkat.png";

const StyledFooter = styled.div`
    width: 100vw;
    height: 30vh;

    background-color: #3a9ad9;
    color: white;

    border-top-left-radius: 70%;
    border-top-right-radius: 70%;

    text-align: center;

    .logo {
        width: 80px;
        height: 100px;

        margin-top: 5vh;
    }
`

const Footer = () => (
    <StyledFooter>
        <img className="logo" src={image} />
    </StyledFooter>
)

export default Footer;