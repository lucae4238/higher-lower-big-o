import React, { useState } from "react";
import getRandomItems from "../../functions/getRandomItem";
import { Container } from "./styles";
import Item from "../Item";
import VS from "../VS";
import { code } from "../../code";

function App() {
  const [available, setAvailable] = useState(code.slice().sort(() => Math.random() - 0.5))

  const [selected, setSelected] = useState([...getRandomItems(available)])

  const getNewItem = () => {
    let newArray = available.filter(item => !selected.includes(item))
    setSelected(prev => [prev[1], newArray[0]])
    newArray.shift()
    setAvailable(newArray)
  }

  return (
    < >
      <VS />
      <Container>
        {selected?.map((item, idx) => (
          <Item key={idx} answer={item.answer} isLast={idx !== 0} text={item.func} />
        ))}

      </Container>
      <button onClick={getNewItem}>Get new Item</button>
    </ >
  );
}
export default App;
