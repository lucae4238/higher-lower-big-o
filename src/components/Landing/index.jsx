import React from 'react'
import github from "../../assets/github.png"
import { CustomContainer, Button, About } from "./styles"

const Landing = (props) => {
  const { start } = props
  const openInNewTab = () => {
    console.log("lolhj")
    const newWindow = window.open("https://github.com/lucae4238/higher-lower-big-o", '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    < >
      <CustomContainer>
        <div>
          <p>
            Welcome!
            This game is inspired in the <a href="http://www.higherlowergame.com/">Higher or Lower game</a>,
            but instead of monthly searches
            you will have to choose by the <a href="https://en.wikipedia.org/wiki/Big_O_notation">Big O Notation</a> of each algorithm
          </p>
          <Button onClick={start}>Get Started</Button>
        </div>
      </CustomContainer>
      <About onClick={openInNewTab}>
        <img src={github} alt="github-link" />
      </About>
    </ >
  )
}

export default Landing
