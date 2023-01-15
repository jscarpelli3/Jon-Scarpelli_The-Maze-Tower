const startButton = document.querySelector(`button`)
const tiles = document.querySelectorAll(`.tile`)
const element = ['empty', 'whor', 'ladder', 'torch', 'plank', 'hole', 'coin']


///start button takes you to the game
// startButton.addEventListener(`click`, () => {
//   window.location.href = 'game.html'
// })


// tiles.addEventListener(`click`, (event) => {
//   const tile = document.querySelector(event.target)
//   let i = 0
//   element.forEach((e,idx) => {
//     if (tile.classList.contains(e)){
//       i = idx
//     }
//   }) 
//   if (i < 6){
//     tile.classList.remove(element[i])
//     tile.classList.add(element[i+1])
//     i++
//   }
// })
const addClickables = () => {
  tiles.forEach((tile)=>{
  tile.addEventListener(`click`, (event) => {
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
    tile.classList.add(element[1])
    i=1
  }
      // const tile = document.querySelector(event.target)
      //   tile.classList.add(element[1])
      console.log('this was clicked')
  })
  })
}

addClickables()
console.log(tiles)
// plyr.classList.remove('player')
// tiles[playerLoc].classList.add(`player`)