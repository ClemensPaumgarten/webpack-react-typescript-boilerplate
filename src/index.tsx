import React, { FunctionComponent } from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

import 'styles/global.scss'

const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    font-size: 24px;
`

const Application: FunctionComponent = () => (
    <Container>
        <span>Frontend Boilerplate</span>
    </Container>
)

render(<Application />, document.getElementById('mount'))
