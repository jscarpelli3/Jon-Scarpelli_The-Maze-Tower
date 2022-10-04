const gamboard = document.querySelector(`.game`)
const tiles = document.querySelectorAll(`.tile`)
const player = document.querySelector(`.player`)
const keyListener = document.querySelector(`button`)
let playerLoc = 202
const walls = []
let lighted = [202, 186, 187, 188, 203, 216, 217, 218, 201]

class Character {
  constructor(name, torches, ladders) {
    this.name = name
    this.torches = torches
    this.ladders = ladders
    this.steps = 0
  }
}

///make the board dark
const makeDark = () => {
  tiles.forEach((tile) => {
    tile.innerHTML = `<img src="ctrBlack.png">`
  })
}
// makeDark()

///place maze

///set lighted area
const makeLight = () => {
  lighted.forEach((lightTile) => {
    tiles[lightTile].innerHTML = ``
  })
}

///get all walls
const getWalls = () => {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].classList.contains(`wall`)) {
      walls.push(i)
    }
  }
}
getWalls()

///// Make Mazzy, Make Light if there is any
const mazzy = new Character(`Mazzy`, 0, 0)
// makeLight()

///Moving around
window.addEventListener(`keydown`, (event) => {
  ///Grab steps h2 to count steps
  let stepCnt = document.querySelector(`.steps`)
  ///select div with player class
  let plyr = document.querySelector(`.player`)
  ///establish lookahead
  let lookAhead = 0
  ///establish a variable to track the difference between current location and proposed location
  let tileDifference = 0
  ///for which ever arrow key, set the look ahead tiles as player+=appropriate value
  switch (event.key) {
    case `ArrowUp`:
      tileDifference = -15
      lookAhead = playerLoc + tileDifference
      break
    case `ArrowRight`:
      tileDifference = 1
      lookAhead = playerLoc + tileDifference
      break
    case 'ArrowDown':
      tileDifference = 15
      lookAhead = playerLoc + tileDifference
      break
    case `ArrowLeft`:
      tileDifference = -1
      lookAhead = playerLoc + tileDifference
      break
    default:
      break
  }
  ///check if the lookahead is equal to a wall
  let noGo = walls.some((wall) => {
    return wall === lookAhead
  })
  if (noGo === false) {
    ///reset Lighted tiles according to the proposed new player location
    lighted.forEach((ntile, i) => {
      lighted[i] += tileDifference
    })
    // makeDark()
    // makeLight()
    ///removing player from current location
    plyr.classList.remove('player')
    ///setting new location
    playerLoc += tileDifference
    ///adding player to that new location
    tiles[playerLoc].classList.add(`player`)
    mazzy.steps += 1
    stepCnt.innerHTML = mazzy.steps
    ///you CANNOT go
  } else if (noGo === true) {
    plyr.classList.remove('player')
    playerLoc += 0
    tiles[playerLoc].classList.add(`player`)
  }
})
