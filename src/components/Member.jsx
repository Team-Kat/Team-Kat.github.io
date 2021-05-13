import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";

import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledPopup = styled.div`
    &-content {
        width: 50vw;
    }

    width: 50vw;
    height: 250px;
    background-color: white;

    overflow-x: hidden;
    overflow-y: hidden;

    .close {
        cursor: pointer;
        position: absolute;
        display: block;
        padding: 2px 5px;
        line-height: 20px;
        right: -10px;
        top: -10px;
        font-size: 24px;
        background: #ffffff;
        border-radius: 18px;
        border: none;
    }

    .content {
        margin-top: 25px;
        @media (min-width: 1000px) {
            display: grid;
            grid-template-columns: 250px 500px;
        }

        .avatar {
            width: 200px;
            height: 200px;
            border-radius: 100px;

            @media (max-width: 1000px) {
                display: none;
            }
        }

        .info {
            h1, h3 {
                font-weight: 400;
            }

            h1 {
                margin-bottom: 5px;
            }

            h3 {
                margin-top: 5px;
                margin-bottom: 1px;
                white-space: pre-line;
            }

            a {
                color: black;
                text-decoration: none;
                margin-right: 5px;
            }
        }
    }
`

const Member = ({ name, discordID, desc, github, avatar }) => (
    <Popup
        trigger={<img className="trigger" alt="user avatar" src={avatar} style={{ width: "200px", height: "200px", borderRadius: "100px" }} />}
        modal
        nested
    >
        {close => (
            <StyledPopup className="modal">
                <button className="close" onClick={close}>
                    &times;
                </button>

                <div className="content">
                    <img className="avatar" alt="avatar" src={avatar} />
                    <div className="info">
                        <h1>{name}</h1>
                        <h3>{desc}</h3>

                        <a href={`https://github.com/${github}`}><FontAwesomeIcon icon={faGithub} /></a>
                        <a href={`https://discord.com/users/${discordID}`}><FontAwesomeIcon icon={faDiscord} /></a>
                    </div>
                </div>
            </StyledPopup>
        )}
    </Popup>
)

export default Member;