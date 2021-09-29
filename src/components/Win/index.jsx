import React from 'react'
import { Container, CustomButton } from './styles'

const Win = (props) => {
  const { resetGame } = props
  return (
    <Container>
      <div>
<h1>
        You win!
</h1>
<h1>
        Thanks for playing
</h1>
<h1>
        more algorithms to come!
</h1>
        <CustomButton onClick={resetGame}>Play again?</CustomButton>
      </div>
    </Container>
  )
}

export default Win
