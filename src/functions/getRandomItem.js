const getRandomItems =  (list) => {

  let shuffled = list.slice().sort(() => Math.random() - 0.5);


  return shuffled.slice(0,2)
}

export default getRandomItems