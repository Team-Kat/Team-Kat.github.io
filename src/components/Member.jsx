import React from "react";
import styled from "styled-components";

import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MemberContainer = styled.div`
    display: inline-block;
    filter: brightness(100%);

    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;

        top: 40%;
        left: 10%;
        text-align: center;

        .icon {
            color: black;
            text-decoration: none;
            font-size: 30px;
        }
    }

    &:hover {
        filter: brightness(70%);
        transition: all 0.5s ease;

        .overlay {
            opacity: 1;
        }
    }
`

const Member = ({ discordID, github, avatar }) => (
    <MemberContainer>
        <img className="trigger" alt="user avatar" src={avatar} style={{ width: "200px", height: "200px", borderRadius: "100px" }} />
        <div className="overlay">
            <a href={`https://github.com/${github}`} className="icon" style={{ marginRight: "15px" }}><FontAwesomeIcon icon={faDiscord} /></a>
            <a href={`https://discord.com/users/${discordID}`} className="icon"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
    </MemberContainer>
)

export default Member;