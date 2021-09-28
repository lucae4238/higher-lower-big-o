import React from 'react'
import { Container, CustomButton } from './styles'

const Lost = (props) => {
  const { resetGame, score } = props
  return (
    <Container>
      <div>
        <h1>You lost!</h1>
        <h1> Score: {score}</h1>
        <CustomButton onClick={resetGame}>Play again?</CustomButton>
      </div>
    </Container>
  )
}

export default Lost
