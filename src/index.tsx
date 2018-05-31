import React from 'react'
import ReactDOM from 'react-dom'

import styles from 'styles/main.scss'
import 'styles/global.scss'

const Main = () => (
  <div className={styles.container}>
    <h1>Let's go!</h1>
  </div>
)

ReactDOM.render(<Main />, document.getElementById('mount'))
