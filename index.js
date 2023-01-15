const startButton = document.querySelector(`.start`)
const lvlCreateButton = document.querySelector(`.level-creator`)

///start button takes you to the game
startButton.addEventListener(`click`, () => {
  window.location.href = 'game.html'
})

lvlCreateButton.addEventListener(`click`, () => {
  window.location.href = 'level_creator.html'
})
