import styled from 'styled-components'

const TextContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

    width: 50vw;
    margin-left: auto;
    margin-right: auto;
    
    margin-top: 30px;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 600px) {
        width: 80vw;
    }

    h1 {
        text-align: center;
        margin-bottom: 50px;

        @media (max-width: 350px) {
            font-size: 25px;
        }
    }

    h3 {
        margin-bottom: 20px;
    }

    p {
        font-size: 20px;
        text-align: left;

        @media (max-width: 350px) {
            font-size: 15px;
        }
    }
`

export default TextContainer