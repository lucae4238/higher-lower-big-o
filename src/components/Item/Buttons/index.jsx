import React from 'react'
import { Button, Container } from './styles'

const Buttons = (props) => {
  const { handleHigher, handleLower, isHidden } = props
  return (
    < Container isHidden={isHidden}>
      <span>This function has </span>
      <div>

        <Button onClick={handleHigher}>
          Higher
        </Button>
        <Button onClick={handleLower}>
          Lower
        </Button>
      </div>
      <span>Big O Notation</span>
    </ Container>
  )
}

export default Buttons
