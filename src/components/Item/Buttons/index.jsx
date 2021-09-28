import React from 'react'
import { Button, Container } from './styles'

const Buttons = (props) => {
  const { handleHigher, handleLower, isHidden } = props
  return (
    < Container isHidden={isHidden}>
      <span>This function has </span>
      <Button onClick={handleHigher}>
        higher
      </Button>
      <Button onClick={handleLower}>
        lower
      </Button>
      <span>time complexity</span>
    </ Container>
  )
}

export default Buttons
