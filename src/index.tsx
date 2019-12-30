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
    <span>
      Frontend project boilerplate with&nbsp;
      <a href='https://reactjs.org/' target='_blank'>react</a>, <a href='https://www.styled-components.com/' target='_blank'>styled-components</a> and <a href='https://webpack.js.org/' target='_blank'>webpack</a>
    </span>
  </Container>
)

render(<Application />, document.getElementById('mount'))
