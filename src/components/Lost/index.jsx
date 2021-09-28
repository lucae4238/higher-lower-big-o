import React from 'react'
import { Container } from './styles'

const Lost = (props) => {
  const { resetGame, score } = props
  return (
    <Container>
      <div>
        <h1>You lost</h1>
        <h1> score:{score}</h1>
        <button onClick={resetGame}>Play again</button>
      </div>
    </Container>
  )
}

export default Lost
