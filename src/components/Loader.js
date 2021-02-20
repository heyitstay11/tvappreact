import React from 'react'
import L from '../img/L.gif'
import styled from 'styled-components'

const LoadingDisplay = styled.div`
    min-height: 65vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
  color: rgb(52, 0, 104);
  font-size: 2.6rem;
  letter-spacing: 1px;
  margin-bottom: 1.4rem;
`;

const Loader = () => {
    return (
        <LoadingDisplay>
            <Title>Loading Please Wait...</Title>
            <img src={L} alt="loadergif" height="250" width="250" />
        </LoadingDisplay>
    )
}

export default Loader
