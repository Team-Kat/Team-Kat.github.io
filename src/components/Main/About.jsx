import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Button from '../../components/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faComments, faRobot } from '@fortawesome/free-solid-svg-icons'

const AboutContainer = styled.div`
    clear: both;

    width: 100vw;
    height: 640px;

    margin-top: 150px;

    h1, h3 {
        font-weight: normal;
    }

    .first.section, .third.section {
        padding-bottom: 20px;

        h1, h3, button {
            margin-left: 10vw;
        }

        @media (max-width: 340px) {
            h1, h3, button {
                margin-left: 5vw !important;
            }
        }

        @media (max-width: 360px) {
            button {
                margin-top: 10px;
            }
        }
    }

    .second.section {
        text-align: right;
        h1, h3, button {
            margin-right: 10vw;
        }

        @media (max-width: 340px) {
            h1, h3, button {
                margin-right: 5vw !important;
            }
        }

        @media (max-width: 360px) {
            button {
                margin-top: 10px;
            }
        }
    }
`

const About = () => (
    <div>
        <AboutContainer>
            <div className = 'first section' data-aos = 'fade-right' data-aos-duration = '2000'>
                <hr />
                <h1>고야이 고야이!</h1>
                <h3>이 팀은 10대로 이루어진 개발 팀입니다!<br />우리는 주로 웹사이트나 봇 등을 만들어요</h3>

                <a type = 'button' href = 'https://discord.gg/R5UG5mR' target="_blank"><Button style = {{color: 'white', backgroundColor: '#2185d0'}}><FontAwesomeIcon icon = {faDiscord} /> 디스코드 서버</Button></a>
                <a type = 'button' href = 'https://github.com/Team-Kat' target="_blank"><Button style = {{color: 'white', backgroundColor: 'black', marginLeft: '10px'}}><FontAwesomeIcon icon = {faGithub} /> 깃허브</Button></a>
            </div>

            <div className = 'second section' data-aos = 'fade-left' data-aos-duration = '2000'>
                <hr />
                <h1>같이 로동하실래요?</h1>
                <h3>자기 정보 제출 후 디스코드에서의 면접으로 팀원이 되실수 있어요!</h3>

                <Link to = '/recruit'><Button style = {{color: 'white', backgroundColor: '#2185d0', marginBottom: '20px'}}><FontAwesomeIcon icon = {faPlus} /> 지원하기</Button></Link>
            </div>

            <div className = 'third section' data-aos = 'fade-right' data-aos-duration = '2000'>
                <hr />
                <h1>샌즈샌즈한 프로젝트~</h1>
                <h3>우리는 2020년 11월부터 시작해서 많은 프로젝트를 만들고 있어요!<br />아직은 완성된 프젝이 없지만 기대하셔도 되요</h3>

                <Button style = {{color: 'white', backgroundColor: '#7289DA'}}><FontAwesomeIcon icon = {faComments} /> 디스커뮤(개발중)</Button>
                <Button style = {{color: 'white', backgroundColor: 'black', marginLeft: '10px', marginBottom: '20px'}}><FontAwesomeIcon icon = {faRobot} /> KDBL(개발중)</Button>
                <hr />
            </div>
        </AboutContainer>
    </div>
)

export default About
