const startButton = document.querySelector(`button`)
const tiles = document.querySelectorAll(`.tile`)
const element = ['empty', 'whor', 'ladder', 'torch', 'plank', 'hole', 'coin']
let ladders=[]
let torches=[]
let planks=[]
let holes=[]
let coins=[]

let level = {
  name: ``,
  walls: [],
  torches: [],
  ladders: [],
  holes: [],
  planks: [],
  coins: [],
  exit: 5,
  darkTime: 0
}

///start button takes you to the game
startButton.addEventListener(`click`, () => {
  tiles.forEach((tile, idx)=>{
    if (tile.classList.contains('whor')){
      level.walls.push(idx)
    } else if (tile.classList.contains('ladder')){
        level.ladders.push(idx)
    } else if (tile.classList.contains('torch')){
      level.torches.push(idx)
    } else if (tile.classList.contains('plank')){
      level.planks.push(idx)
    } else if (tile.classList.contains('hole')){
    level.holes.push(idx)
    } else if (tile.classList.contains('coin')){
    level.coins.push(idx)
    }
  })
  window.localStorage.setItem()
})


const addClickables = () => {
  tiles.forEach((tile) => {
    tile.addEventListener(`click`, (event) => {
      if (tile.classList.contains('deny')){
        console.log('denied')
      } else {
        let i = 0
        element.forEach((e,idx) => {
          if (tile.classList.contains(e)){
            i = idx
          }
        }) 
      if (i < 6 ){
        tile.classList.remove(element[i])
        tile.classList.add(element[i+1])
        i++
      } else {
        tile.classList.remove(element[i])
        tile.classList.add(element[0])
        i=0
      }
     }
    })
    // tiles.forEach((tile)=>{
    //   increment
    // })
  console.log('this was clicked')
  })
}

addClickables()
