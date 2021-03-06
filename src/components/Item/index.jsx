import React from 'react'
import { Container, CodeContainer, Answer } from './styles'
import Buttons from './Buttons'
import Code from '../Code'

const Item = (props) => {
  const { text, showingAnswer, isLast, answer, handleHigher, handleLower, isMoving } = props

  return (
    <Container left={isMoving}>

      <CodeContainer>
        <Code text={text} />
      </CodeContainer>

      {isLast && <Buttons handleHigher={handleHigher} handleLower={handleLower} isHidden={showingAnswer} />}
      {
        (!isLast || showingAnswer) && <Answer>
          <span>
            {answer}
          </span>
        </Answer>
      }
    </Container>
  )
}

export default Item
