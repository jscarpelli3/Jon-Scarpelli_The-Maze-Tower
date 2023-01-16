const saveStartButton = document.querySelector('.save-start')
const noSaveStartButton = document.querySelector(`.nosave-start`)
const eraseLevelsButton = document.querySelector(`.erase-levels`)
const tiles = document.querySelectorAll(`.tile`)
const element = ['empty', 'whor', 'ladder', 'torch', 'plank', 'hole', 'coin']
let ladders=[]
let torches=[]
let planks=[]
let holes=[]
let coins=[]
let newLevels = []

let light = 60
let lvlOrder = 1
let lvlName=''
const setLevelName = () => {
  lvlName = document.getElementById("level-name").value
  console.log(lvlName)
}
const setLightTime = () => {
  light = document.getElementById("light-time").value
}
const setLevelOrder = () => {
  lvlOrder = document.getElementById("level-order").value
}

///start button that saves your new level and takes you to the game
saveStartButton.addEventListener(`click`, () => {
  let level = {
    name: ``,
    walls: [],
    torches: [],
    ladders: [],
    holes: [],
    planks: [],
    coins: [],
    exit: 5,
    darkTime: 0,
    levelOrder: 1
  }
  tiles.forEach((tile, idx)=>{
    if (tile.classList.contains('wvert') || tile.classList.contains('whor') || tile.classList.contains('nwcorner') || tile.classList.contains('necorner') || tile.classList.contains('swcorner') || tile.classList.contains('secorner')){
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
  level.darkTime=light*1000
  level.levelOrder= lvlOrder
  level.name = lvlName
  newLevels.push(level)
  let newLevelsJSON = JSON.stringify(newLevels)
  console.log(newLevels)
  window.localStorage.setItem('levels', newLevelsJSON )
  window.location.href = 'index.html'
})

///start button that DOES NT save the level
noSaveStartButton.addEventListener(`click`, () => {
  window.location.href = 'index.html'
})

eraseLevelsButton.addEventListener(`click`, () => {
  window.localStorage.clear()
  window.location.href = 'index.html'
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
  })
}

addClickables()
