const gamboard = document.querySelector(`.game`)
const tiles = document.querySelectorAll(`.tile`)
const player = document.querySelector(`.player`)
const keyListener = document.querySelector(`button`)
let playerLoc = 202
const walls = []
let lighted = [202, 186, 187, 188, 203, 216, 217, 218, 201]

///make the board dark
const makeDark = () => {
  tiles.forEach((tile) => {
    tile.innerHTML = `<img src="ctrBlack.png">`
  })
}

///set lighted area
const makeLight = () => {
  lighted.forEach((lightTile) => {
    tiles[lightTile].innerHTML = ``
  })
}

///set all walls
const makeWalls = () => {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].classList.contains(`left-wall`)) {
      walls.push(i)
    }
  }
}

makeWalls()
console.log(walls)
makeDark()
makeLight()

///Moving around
window.addEventListener(`keydown`, (event) => {
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
    makeDark()
    makeLight()
    ///removing player from current location
    plyr.classList.remove('player')
    ///setting new location
    playerLoc += tileDifference
    ///adding player to that new location
    console.log(playerLoc)
    tiles[playerLoc].classList.add(`player`)
  } else if (noGo === true) {
    plyr.classList.remove('player')
    playerLoc += 0
    tiles[playerLoc].classList.add(`player`)
  }
})
// const Mazzy = {}
