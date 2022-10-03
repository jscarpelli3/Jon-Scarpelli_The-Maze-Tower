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
// makeDark()
// makeLight()

// keyListener.addEventListener(`click`, function () {
//   ///select the div with the player class
//   let plyr = document.querySelector(`.player`)

//   let lookAhead = playerLoc - 15
//   let noGo = walls.some((wall) => {
//     return wall === lookAhead
//   })
//   if (noGo === false) {
//     ///reset Lighted areas
//     lighted.forEach((ntile, i) => {
//       lighted[i] -= 15
//     })

//     makeDark()
//     makeLight()
//     ///removing player from current location
//     plyr.classList.remove('player')
//     ///setting new location
//     playerLoc -= 15
//     ///adding player to that new location
//     console.log(playerLoc)
//     tiles[playerLoc].classList.add(`player`)
//     ///moving light & dark around player
//   } else if (noGo === true) {
//     plyr.classList.remove('player')
//     playerLoc += 0
//     tiles[playerLoc].classList.add(`player`)
//   }
// })

player.addEventListener(`keydown`, (event) => {
  switch (event.key) {
    case 'ArrowDown':
      console.log(`arrow down is being pressed`)
      break
    default:
      break
  }
})

const Mazzy = {}
