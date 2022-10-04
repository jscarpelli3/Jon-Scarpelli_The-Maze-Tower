const gamboard = document.querySelector(`.game`)
const tiles = document.querySelectorAll(`.tile`)
const player = document.querySelector(`.player`)
const keyListener = document.querySelector(`button`)
const invDiv = document.querySelector(`.inventory`)
const trchCount = document.createElement(`span`)
const ladderCount = document.createElement(`span`)
let playerLoc = 202
let exitLoc = 5
const walls = []
const noWall = []
let lighted = [202, 186, 187, 188, 203, 216, 217, 218, 201]
const torchLoc = []
const ladderLoc = []
////walls for level 1, exit is at 5
const lvlOneWalls = [
  0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 29, 44, 59, 64, 89, 104, 119,
  134, 149, 164, 179, 194, 209, 211, 212, 213, 214, 215, 216, 217, 218, 219,
  220, 221, 222, 223, 224, 15, 20, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180,
  195, 210, 17, 19, 34, 35, 36, 37, 38, 39, 40, 41, 42, 47, 49, 62, 64, 65, 66,
  68, 69, 70, 71, 72, 73, 77, 79, 92, 94, 95, 96, 97, 98, 99, 100, 107, 109,
  117, 122, 124, 126, 128, 129, 130, 131, 132, 137, 139, 143, 147, 152, 154,
  155, 156, 157, 158, 162, 167, 182, 183, 184, 185, 186, 187, 188, 189, 190, 192
]
///walls for lvl 2 exit is at 5 again
const lvlTwoWalls = [
  0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 29, 44, 59, 64, 89, 104, 119,
  134, 149, 164, 179, 194, 209, 211, 212, 213, 214, 215, 216, 217, 218, 219,
  220, 221, 222, 223, 224, 15, 20, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180,
  195, 210
]

class Character {
  constructor(name, torches, ladders) {
    this.name = name
    this.torches = torches
    this.ladders = ladders
    this.steps = 0
  }
}

const placeWalls = (levelWalls) => {
  levelWalls.forEach((wallTile, i) => {
    tiles[wallTile].classList.toggle = `wall`
  })
}

///make the board dark
const makeDark = () => {
  tiles.forEach((tile) => {
    if (
      tile.classList.contains(`torch`) ||
      tile.classList.contains(`ladder`) ||
      tile.classList.contains(`exit`)
    ) {
    } else {
      tile.innerHTML = `<img src="ctrBlack.png">`
    }
  })
}

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
    } else {
      noWall.push[i]
    }
  }
}

const placeItems = (ldrs, trchs, exit) => {}

//// get the torch locations
const getTorches = () => {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].classList.contains(`torch`)) {
      torchLoc.push(i)
    }
  }
}

////function for checking for torches
const checkTorch = () => {
  let torchNow = torchLoc.includes(playerLoc)
  if (torchNow === true) {
    addTorch()
  }
}

///function for adding torches
const addTorch = () => {
  tiles[playerLoc].classList.remove(`torch`)
  torchLoc.forEach((tor, i) => {
    if (tor === playerLoc) {
      torchLoc.splice(i, 1)
    }
  })
  if (mazzy.torches === 0) {
    let trchDiv = document.createElement(`div`)
    // let trchCount = document.createElement(`span`)
    trchDiv.innerHTML = `<img src=torch.png>`
    trchDiv.classList.add(`inv-trch`)
    trchCount.classList.add(`trch-count`)
    trchDiv.append(trchCount)
    invDiv.append(trchDiv)
  }
  mazzy.torches += 1
  trchCount.innerText = mazzy.torches
}
//// get the ladder locations
const getLadder = () => {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].classList.contains(`ladder`)) {
      ladderLoc.push(i)
    }
  }
}

////function for checking for ladders
const checkLadder = () => {
  let ladderNow = ladderLoc.includes(playerLoc)
  if (ladderNow === true) {
    addLadder()
  }
}

///function for adding ladders
const addLadder = () => {
  tiles[playerLoc].classList.remove(`ladder`)
  ladderLoc.forEach((lad, i) => {
    if (lad === playerLoc) {
      ladderLoc.splice(i, 1)
    }
    if (mazzy.ladders === 0) {
      let ladderDiv = document.createElement(`div`)
      // let trchCount = document.createElement(`span`)
      ladderDiv.innerHTML = `<img src=ladder.png>`
      ladderDiv.classList.add(`inv-ladder`)
      ladderCount.classList.add(`ldr-count`)
      ladderDiv.append(ladderCount)
      invDiv.append(ladderDiv)
    }
    mazzy.ladders += 1
    ladderCount.innerText = mazzy.ladders
  })
}

const exit = () => {}

/////////Starting Game
/// Make Mazzy
const mazzy = new Character(`Mazzy`, 0, 0)
// /// Make Dark
// makeDark()
// /// Make Light if there is any
// makeLight()
placeWalls()
placeItems()
getWalls()
getTorches()
getLadder()
console.log(torchLoc)

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
  ///IF YOU CAN GO
  if (noGo === false) {
    if (lookAhead === exitLoc) {
      window.location.href = 'gamelvl2.html'
    } else {
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
      tiles[playerLoc].classList.add(`player`)
      mazzy.steps += 1
      stepCnt.innerHTML = mazzy.steps
      ///if you go to a torch spot
      console.log(playerLoc)
      checkTorch()
      checkLadder()
    }
    ///you CANNOT go
  } else if (noGo === true) {
    plyr.classList.remove('player')
    playerLoc += 0
    tiles[playerLoc].classList.add(`player`)
  }
})
