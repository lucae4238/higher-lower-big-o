import React from 'react'
import { Button, Container } from './styles'

const Buttons = (props) => {
  const { higherAction, lowerAction } = props
  return (
    < Container>
    <span>This function has </span>
      <Button onClick={higherAction}>
        higher
      </Button>
      <Button onClick={lowerAction}>
        lower
      </Button>
    <span>time complexity</span>
    </ Container>
  )
}

export default Buttons
