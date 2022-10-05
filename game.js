const gamboard = document.querySelector(`.game`)
const tiles = document.querySelectorAll(`.tile`)
// const player = document.querySelector(`.player`)
const keyListener = document.querySelector(`button`)
const invDiv = document.querySelector(`.inventory`)
const trchCount = document.createElement(`span`)
const ladderCount = document.createElement(`span`)
let lookAhead = 0
const outWalls = [
  0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 29, 44, 59, 74, 89, 104, 119,
  134, 149, 164, 179, 194, 209, 211, 212, 213, 214, 215, 216, 217, 218, 219,
  220, 221, 222, 223, 224
]
let curLvl = 0
let playerLoc = 202
let exitLoc = 5
const walls = []
const noWall = []
let lighted = [202, 186, 187, 188, 203, 216, 217, 218, 201]
const torchLoc = []
const ladderLoc = []
////walls for level 1, exit is at 5
const lvlOneWalls = [
  0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 29, 30, 44, 45, 59, 60, 74,
  75, 89, 90, 104, 105, 119, 120, 134, 135, 149, 150, 164, 165, 179, 180, 194,
  195, 209, 210, 211, 212, 213, 214, 215, 216, 218, 219, 220, 221, 222, 223,
  224, 17, 19, 34, 35, 36, 37, 38, 39, 40, 41, 42, 47, 49, 62, 64, 65, 66, 68,
  69, 70, 71, 72, 73, 77, 79, 92, 94, 95, 96, 97, 98, 99, 100, 107, 109, 117,
  122, 124, 126, 128, 129, 130, 131, 132, 137, 139, 143, 147, 152, 154, 155,
  156, 157, 158, 162, 167, 177, 182, 183, 184, 185, 186, 187, 188, 189, 190, 192
]
///walls for lvl 2 exit is at 5 again
const lvlTwoWalls = [
  0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 29, 30, 44, 45, 59, 60, 74,
  75, 89, 90, 104, 105, 119, 120, 134, 135, 149, 150, 164, 165, 179, 180, 194,
  195, 209, 210, 211, 212, 213, 214, 215, 216, 218, 219, 220, 221, 222, 223,
  224, 21, 23, 32, 33, 34, 35, 36, 38, 39, 40, 41, 42, 53, 61, 62, 63, 64, 65,
  66, 67, 68, 69, 79, 83, 94, 98, 109, 113, 124, 128, 139, 143, 154, 158, 169,
  173, 184, 188, 203
]
const lvlOneTorches = [140, 208]
const lvlOneLadders = [123]
const lvlOneExit = 5
const lvlTwoTorches = [140, 208]
const lvlTwoLadders = [121]
const lvlTwoExit = 5

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
    tiles[wallTile].classList.add(`wall`)
  })
  levelWalls.forEach((tile, i) => {
    let lt = (tile -= 1)
    let rt = (tile += 1)
    let up = (tile -= 15)
    let dn = (tile += 15)

    if (tile % 15 === 14 || tile % 15 === 0) {
      tiles[tile].classList.add(`wvert`)
    } else if (
      tiles[rt].classList.contains(`wall`) &&
      tiles[lt].classList.contains(`wall`)
    ) {
      tiles[tile].classList.add(`whor`)
    } else if (
      tiles[dn].classList.contains(`wall`) ||
      tiles[up].classList.contains(`wall`)
    ) {
      tiles[tile].classList.add('wvert')
    } else if (
      tiles[up].classList.contains(`wall`) &&
      tiles[rt].classList.contains(`wall`)
    ) {
      tiles[tile].classList.add(`swcorner`)
    } else if (
      tiles[up].classList.contains(`wall`) &&
      tiles[lt].classList.contains(`wall`)
    ) {
      tiles[tile].classList.add(`secorner`)
    } else if (
      tiles[dn].classList.contains(`wall`) &&
      tiles[rt].classList.contains(`wall`)
    ) {
      tiles[tile].classList.add(`nwcorner`)
    } else if (
      tiles[dn].classList.contains(`wall`) &&
      tiles[lt].classList.contains(`wall`)
    ) {
      tiles[tile].classList.add(`necorner`)
    }
  })
  tiles[0].classList.add(`nwcorner`)
  tiles[14].classList.add(`necorner`)
  tiles[210].classList.add(`swcorner`)
  tiles[224].classList.add(`secorner`)
  tiles[exitLoc + 1].classList.add(`whor`)
  tiles[entLoc].classList.add(`ent`)
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
  console.log(walls)
}

////place items
const placeItems = (ldrs, trchs, exit) => {
  tiles[exit].classList.add(`exit`)
  ldrs.forEach((ldr) => {
    tiles[ldrs].classList.add(`ladder`)
  })
  trchs.forEach((trc) => {
    tiles[trc].classList.add(`torch`)
  })
}

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

const useTorch = () => {
  if (mazzy.torches > 0) {
    console.log(`Torch Used!`)
    mazzy.torches -= 1
    trchCount.innerText = mazzy.torches
  }
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

const useLadder = (lkAhd) => {
  console.log(lkAhd)
  if (mazzy.ladders > 0) {
    // let newLad = lkAhd
    let wallRmv = 0
    walls.forEach((wall, i) => {
      if (wall === lkAhd) {
        wallRmv = i
      }
    })
    tiles[lkAhd].innerHTML = `<img src=ladder.png>`
    mazzy.ladders -= 1
    ladderCount.innerText = mazzy.ladders
    tiles[lkAhd].classList.remove(`wall`)
    walls.splice(wallRmv, 1)
  }
}

const placePlayer = () => {
  let curPlyr = document.querySelector(`.player`)
  curPlyr.classList.remove(`player`)
  tiles[playerLoc].classList.add(`player`)
}

const clearWalls = () => {
  tiles.forEach((tile, i) => {
    if (tiles[i].classList.contains(`wall`)) {
      tiles[i].classList.remove(`wall`)
    }
  })
  tiles.forEach((tile, i) => {
    if (tiles[i].classList.contains(`wvert`)) {
      console.log(`wverts`)
      tiles[i].classList.remove(`wvert`)
    } else if (tiles[i].classList.contains(`whor`)) {
      tiles[i].classList.remove(`whor`)
    } else if (tiles[i].classList.contains(`nwcorner`)) {
      tiles[i].classList.remove(`nwcorner`)
    } else if (tiles[i].classList.contains(`necorner`)) {
      tiles[i].classList.remove(`necorner`)
    } else if (tiles[i].classList.contains(`swcorner`)) {
      tiles[i].classList.remove(`swcorner`)
    } else if (tiles[i].classList.contains(`secorner`)) {
      tiles[i].classList.remove(`secorner`)
    }
    console.log(`where are the walls?`)
  })
}

const clearBoard = (wlls, lddrs, tors, ext) => {
  walls.length = 0
  torchLoc.length = 0
  ladderLoc.length = 0
  playerLoc = 202
  entLoc = playerLoc + 15
  placeWalls(wlls)
  placeItems(lddrs, tors, ext)
  getWalls()
  getTorches()
  getLadder()
  placePlayer()
}

const exit = () => {
  if (curLvl === 0) {
    clearBoard(lvlOneWalls, lvlOneLadders, lvlOneTorches, lvlOneExit)
    curLvl = 1
  } else if (curLvl === 1) {
    clearWalls()
    clearBoard(lvlOneWalls, lvlOneLadders, lvlOneTorches, lvlOneExit)
  } else if (curLvl === 2) {
    clearWalls()
    clearBoard(lvlTwoWalls, lvlTwoLadders, lvlTwoTorches, lvlTwoExit)
  }
}

/////////Starting Game
/// Make Mazzy
const mazzy = new Character(`Mazzy`, 0, 0)
exit()
// /// Make Dark
// makeDark()
// /// Make Light if there is any
// makeLight()

///Moving around
window.addEventListener(`keydown`, (event) => {
  ///Grab steps h2 to count steps
  let stepCnt = document.querySelector(`.steps`)
  ///select div with player class
  let plyr = document.querySelector(`.player`)
  ///establish lookahead

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
      console.log(lookAhead)
      break
    case 'ArrowDown':
      tileDifference = 15
      lookAhead = playerLoc + tileDifference
      break
    case `ArrowLeft`:
      tileDifference = -1
      lookAhead = playerLoc + tileDifference
      break
    case `l`:
      console.log(lookAhead)
      useLadder(lookAhead)
      break
    case `t`:
      useTorch()
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
      curLvl++
      exit()
    } else if (lookAhead === entLoc) {
      curLvl--
      exit()
      console.log(lookAhead)
      console.log(entLoc)
    } else {
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
      ///if you go to a torch spot
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
