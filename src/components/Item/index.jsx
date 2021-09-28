import React from 'react'
import { Container, CodeContainer, Answer } from './styles'
import Buttons from './Buttons'
import Code from '../Code'

const Item = (props) => {
  const { text, explanation, isLast, answer } = props

  return (
    <Container>

      <CodeContainer>
        <Code text={text} />
      </CodeContainer>

      {isLast && <Buttons />}
      <Answer>
        {answer}
      </Answer>
    </Container>
  )
}

export default Item
