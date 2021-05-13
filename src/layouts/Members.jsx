import React from "react";
import styled from "styled-components";

import Member from "../components/Member";

import MemberList from "../data/Members";

const MembersContainer = styled.div`
    clear: both;

    width: 100vw;
    margin-top: 100px;

    text-align: center;
    margin-bottom: 100px;

    h1 {
        font-weight: normal;
    }

    .trigger {
        margin-left: 20px;
    }
`

const Members = () => (
    <div>
        <MembersContainer data-aos="fade-up" data-aos-duration="2000">
            <h1>팀원{/*이라 쓰고 노예라 읽는다*/}들이에요!</h1>
            {MemberList.map(m => <Member  {...m} />)}
        </MembersContainer>
    </div>
)

export default Members;