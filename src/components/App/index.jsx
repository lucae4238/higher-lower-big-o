import React, { useState } from "react";
import getRandomItems from "../../functions/getRandomItem";
import { Container, ScoreSpan } from "./styles";
import Item from "../Item";
import VS from "../VS";
import Lost from "../Lost"
import Landing from "../Landing";
import { code } from "../../code";

function App() {
  const [isLanding, setIsLanding] = useState(true)
  const [available, setAvailable] = useState([...code].slice().sort(() => Math.random() - 0.5))
  const [selected, setSelected] = useState([...getRandomItems(available)])
  const [score, setScore] = useState(0);
  const [lost, setLost] = useState(false);
  const [isMoving, setIsMoving] = useState(false)
  const [isFilling, setIsFilling] = useState(false)
  const [showingAnswer, setShowingAnswer] = useState(false)


  const getNewItem = () => {
    let newArray = available.filter(item => !selected.includes(item))
    setSelected(prev => [prev[1], newArray[0]])
    newArray.shift()
    setAvailable(newArray)
  }

  const handleChoice = (bool) => {
    if (isMoving) return;
    setShowingAnswer(true)
    setTimeout(() => {

      if (bool) {
        setIsFilling("green")
        setTimeout(() => {
          setIsFilling(null)
          setIsMoving(true)

          setTimeout(() => {
            setIsMoving(false)
            setScore(prev => prev + 1)
            setShowingAnswer(false)
            getNewItem()
          }, 1000)

        }, 1000)
      } else {
        setIsFilling("red")
        setTimeout(() => {

          setLost(true)
        }, 1000);
      }
    }, 1000)
  }

  const handleLower = () => {
    handleChoice(selected[0].value >= selected[1].value)
  }

  const handleHigher = () => {
    handleChoice(selected[0].value <= selected[1].value)
  }

  const resetGame = () => {
    setAvailable(code)
    setLost(false)
    setIsFilling(null)
    setShowingAnswer(false)
    setScore(0)
    setSelected([...getRandomItems(code)])
  }

  if (isLanding) {
    return (
      <Landing start={() => setIsLanding(false)} />
    )
  }

  return (
    < >
      {lost && (<Lost score={score} resetGame={resetGame} />)}
      <VS isMoving={isFilling} />
      <Container>
        {selected?.map((item, idx) => (
          <Item
            isMoving={isMoving}
            showingAnswer={showingAnswer}
            handleHigher={handleHigher}
            handleLower={handleLower}
            key={idx}
            answer={item.answer}
            isLast={idx !== 0}
            text={item.func} />
        ))}
        {
          !lost && <ScoreSpan>Score: {score}</ScoreSpan>
        }
      </Container>
    </ >
  );
}
export default App;
