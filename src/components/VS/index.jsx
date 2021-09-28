import React from 'react'
import { Circle } from './styles'

const VS = (props) => {
  const { isMoving } = props
  return (
    <Circle isMoving={isMoving}>
      VS
    </Circle>
  )
}

export default VS
