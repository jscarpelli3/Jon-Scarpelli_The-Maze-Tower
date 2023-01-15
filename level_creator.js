const startButton = document.querySelector(`button`)
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
const setLightTime = () => {
  light = document.getElementById("light-time").value
  console.log(light)
}
const setLevelOrder = () => {
  // document.getElementById("light-time").stepUp()
  lvlOrder = document.getElementById("level-order").value
  console.log(lvlOrder)
}


///start button takes you to the game
startButton.addEventListener(`click`, () => {
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
  level.levelOrder=1 
  newLevels.push(level)
  console.log(newLevels)
  // window.localStorage.setItem('levels', newLevels )
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
