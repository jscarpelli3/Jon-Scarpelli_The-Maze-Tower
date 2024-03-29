


///declare all audio
const backgroundMusic = new Audio("sound/nano.mp3");
const stepFx = new Audio(`sound/step.wav`);
const ladderfx = new Audio(`sound/ladder.mp3`);
const torchfx = new Audio(`sound/fire.mp3`);
const coinfx = new Audio(`sound/pickup2.mp3`);
const winfx = new Audio(`sound/win.mp3`);
const fallfx = new Audio(`sound/fall1.mp3`);
const fallFloorfx = new Audio(`sound/fallFloor.mp3`);
const getFx = new Audio(`sound/pickup.mp3`);
const collissionFx1 = new Audio("sound/spriteHit.mp3");
collissionFx1.volume = 0.2;
const spikeReady = new Audio("sound/spikeReady.mp3");
  spikeReady.volume = 0.6;
const spikeHit = new Audio("sound/spikeHit.mp3");
  spikeHit.volume = 0.3;
const exitfx = new Audio(`sound/level.mp3`);
exitfx.volume = 0.6;
const endSong = new Audio(`sound/ending.mp3`);
endSong.volume = 0.7;
const paraGet = new Audio(`sound/para1.mp3`);
paraGet.volume = 0.6;
const denyFx = new Audio(`sound/deny.wav`);
const vendExit = new Audio(`sound/vendExit.mp3`);
const vendAccept = new Audio(`sound/vendAccept.mp3`);
const spriteMove = new Audio(`sound/spriteMove.mp3`);
  spriteMove.volume=.5

///variables to hold timers & intervals
let torchTimeoutID;
let pauseDarkID;
let spriteCollissionID;
let spikeBehaviorID;
let spikeCollissionID;
///


///Important Animations Data

// import { spikeAnimation } from './animations.js';

const spikeAnimation = [
  {
    src: "pics/spike_frames/spike1.png",
    frameMult: 2,
  },
  {
    src: "pics/spike_frames/spike2.png",
    sfx: null,
    frameMult: 11,
    sfx: spikeReady,
  },
  {
    src: "pics/spike_frames/spike3.png",
    sfx: null,
    frameMult: 1,
  },
  {
    src: "pics/spike_frames/spike2.png",
    sfx: null,
    frameMult: 1,
  },
  {
    src: "pics/spike_frames/spike3.png",
    sfx: null,
    frameMult: 1,
  },
  {
    src: "pics/spike_frames/spike2.png",
    sfx: null,
    frameMult: 1,
  },
  {
    src: "pics/spike_frames/spike3.png",
    sfx: null,
    frameMult: 1,
  },
  {
    src: "pics/spike_frames/spike2.png",
    sfx: null,
    frameMult: 1,
    addClass: "spikeHit",
  },
  {
    src: "pics/spike_frames/spike5.png",
    sfx: spikeHit,
    frameMult: 10,
  },
  {
    src: "pics/spike_frames/spike6.png",
    sfx: null,
    frameMult: 1,
  },
  {
    src: "pics/spike_frames/spike7.png",
    sfx: fallFloorfx,
    frameMult: 1,
  },
  {
    src: "pics/spike_frames/spike8.png",
    sfx: null,
    frameMult: 2,
    removeClass: "spikeHit",
  },
  {
    src: "pics/spike_frames/spike1.png",
    sfx: null,
    frameMult: 2,
    endFunction: (spikeRef) => {
      ///stop checking for collission
      clearInterval(spikeCollissionID)
      ///remove spike from dom
      spikeRef.remove()
      spikeOn=false
      }
    }
];

/// Global grabs & vars
const gamboard = document.querySelector(`.game`);
const tiles = document.querySelectorAll(`.tile`);
const keyListener = document.querySelector(`button`);
const invDiv = document.querySelector(`.inventory`);
const trchCount = document.createElement(`span`);
const ladderCount = document.createElement(`span`);
const plankCount = document.createElement(`span`);
const paraCount = document.createElement(`span`);
const lifeInv = document.querySelector(".lf-count");
const outWalls = [
  0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 29, 44, 59, 74, 89, 104, 119,
  134, 149, 164, 179, 194, 209, 211, 212, 213, 214, 215, 216, 217, 218, 219,
  220, 221, 222, 223, 224,
];
let curLvl = 0;
let curLvlName = "";
let playerLoc = 202;
let exitLoc = 5;
let paraLoc = 27;
const walls = [];
const noWall = [];
const torchLoc = [];
const ladderLoc = [];
const plankLoc = [];
const holeLoc = [];
const coinLoc = [];
const lstApdLdr = [];
let lookAhead = 0;
let ended = 0;
let torchOn = 0;
let darkOn = 0;
let vendOn = false
let vendsAvailable = 0
let currentSprites = [{
                        start: [0,0],
                        end: [0,0],
                        time: 6000
                        }
                      ]


//mazzy
let mazzySprite 

////
////
//// Level Setups
////
////

////////////
let allLevels = [
  {
    name: `dummy`,
    walls: [],
    torches: [],
    ladders: [],
    holes: [],
    planks: [],
    coins: [],
    exit: 5,
    darkTime: 60000,
  },
  {
    name: `"Grab Stuff"`,
    walls: [
      0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 29, 30, 44, 45, 59, 60,
      74, 75, 89, 90, 104, 105, 119, 120, 134, 135, 149, 150, 164, 165, 179,
      180, 194, 195, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221,
      222, 223, 224, 17, 19, 34, 35, 36, 37, 38, 39, 40, 41, 42, 47, 49, 62, 64,
      65, 66, 68, 69, 70, 71, 72, 73, 77, 79, 92, 94, 95, 96, 97, 98, 99, 100,
      107, 109, 117, 122, 124, 126, 128, 129, 130, 131, 132, 137, 139, 143, 147,
      152, 154, 155, 156, 157, 158, 162, 167, 177, 183, 184, 185, 186, 187, 188,
      189, 190, 192,
    ],
    torches: [140, 208, 108],
    ladders: [123],
    holes: [78, 153, 204],
    planks: [50, 203],
    coins: [16, 142],
    sprite: {
      on: true,
      sprites: [
        {
          start: 31,
          end: 196,
          time: 4557
        },
        {
          start: 18, 
          end: 123,
          time: 3760
        }
      ]
    },
    spike: false,
    parachute: {
      thisLevel: false, 
      //this level will never have the parachute
      tileLocation: null
      },
    exit: 5,
    darkTime: 60000,
    vend: [195,59],
    vendChosen: null
  },
  {
    name: `"Uh Oh, it's dark"`,
    walls: [
      0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 29, 30, 44, 45, 59, 60,
      74, 75, 89, 90, 104, 105, 119, 120, 134, 135, 149, 150, 164, 165, 179,
      180, 194, 195, 209, 210, 211, 212, 213, 214, 215, 216, 218, 219, 220, 221,
      222, 223, 224, 21, 23, 32, 33, 34, 35, 36, 38, 39, 40, 41, 42, 43, 53, 61,
      62, 63, 64, 65, 66, 67, 68, 69, 79, 83, 94, 98, 109, 113, 124, 128, 139,
      143, 154, 158, 169, 173, 184, 188, 203,
    ],
    torches: [111, 24, 50, 57],
    ladders: [121, 122, 123, 163],
    holes: [17, 131],
    planks: [87],
    coins: [25, 193],
    sprite: {
      on: true,
      sprites: [
        {
          start: 24,
          end: 28,
          time: 2000
        },
      ]
    },
    spike: true,
    parachute: {
      thisLevel: true, 
      tileLocation: 27
    },
    exit: 5,
    darkTime: 6000,
    vend: [45,209],
    vendChosen: null
  },
  {
    name: `"So many holes!"`,
    walls: [
      0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 29, 30, 44, 45, 59, 60,
      74, 75, 89, 90, 104, 105, 119, 120, 134, 135, 149, 150, 164, 165, 179,
      180, 194, 195, 209, 210, 211, 212, 213, 214, 215, 216, 218, 219, 220, 221,
      222, 223, 224, 19, 21, 34, 35, 36,
    ],
    torches: [32, 79, 197, 199, 201, 203, 205, 207],
    ladders: [28],
    holes: [27, 42, 54, 73, 77, 82, 114, 111, 140, 146, 154, 108, 127, 122],
    planks: [96],
    coins: [98, 147],
    spike: false,
    sprite: {
      on: true,
      sprites: [
        {
          start: 91, 
          end: 187,
          time: 3000
        },
        {
          start: 22, 
          end: 103,
          time: 5000
        }
      ]
    },
    parachute: {
      thisLevel: false, 
      tileLocation: 27
    },
    exit: 5,
    darkTime: 2000,
    vend: [105,104],
    vendChosen: null
  },
  {
    name: `"Dooozy!"`,
    walls: [
      0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 29, 30, 44, 45, 59, 60,
      74, 75, 89, 90, 104, 105, 119, 120, 134, 135, 149, 150, 164, 165, 179,
      180, 194, 195, 209, 210, 211, 212, 213, 214, 215, 216, 218, 219, 220, 221,
      222, 223, 224, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 61, 62, 63, 64,
      65, 66, 67, 69, 70, 71, 72, 73, 77, 82, 84, 92, 93, 95, 96, 97, 99, 101,
      102, 122, 125, 126, 127, 128, 129, 131, 137, 138, 139, 140, 146, 163, 161,
      157, 152, 167, 169, 170, 171, 172, 173, 174, 175, 176, 182, 184, 188, 192,
      199, 201, 205,
    ],
    torches: [191, 124],
    ladders: [196],
    holes: [28, 76, 81, 117, 123, 144],
    planks: [87],
    coins: [113, 147],
    spike: true,
    sprite: {
      on: true,
      sprites: [
        {
          start: 16,
          end: 25,
          time: 3500
        },
        {
          start: 106, 
          end: 112,
          time: 3760
        },
        {
          start: 141, 
          end: 145,
          time: 3000
        },
      ],
      s1X: "48",
      s1Y: "96",
      e1X: "0",
      e1Y: "520",
      s2X: "4",
      s2Y: "4",
      e2X: "4",
      e2Y: "4",
      time: 4557,
    },
    parachute: {
      thisLevel: false, 
      tileLocation: 27
    },
    exit: 5,
    darkTime: 5000,
    vend: [165,44],
    vendChosen: null
  },
  {
    name: `"Luqui's Level"`,
    walls: [
      0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 29, 30, 44, 45, 59, 60,
      74, 75, 89, 90, 104, 105, 119, 120, 134, 135, 149, 150, 164, 165, 179,
      180, 194, 195, 209, 210, 211, 212, 213, 214, 215, 216, 218, 219, 220, 221,
      222, 223, 224, 17, 21, 25, 32, 36, 40, 47, 51, 55, 62, 66, 70, 76, 77, 78,
      79, 80, 81, 85, 96, 100, 101, 102, 103, 111, 112, 113, 114, 115, 126, 130,
      141, 145, 151, 152, 153, 154, 155, 156, 160, 175, 186, 190, 201, 205,
    ],
    torches: [],
    ladders: [107, 122, 137, 142],
    holes: [95, 97, 99, 110, 116, 125, 146, 176, 206],
    planks: [28],
    coins: [31, 49, 53, 57, 124, 158, 167, 183],
    spike: true,
    sprite: {
      on: true,
      sprites: [
        {
          start: 91, 
          end: 187,
          time: 3000
        },
        {
          start: 22, 
          end: 103,
          time: 5000
        }
      ]
    },
    parachute: {
      thisLevel: false, 
      tileLocation: 27
    },
    exit: 5,
    darkTime: 7000,
    vend: [130,164],
    vendChosen: null
  },
  {
    name: `"This is odd..."`,
    walls: [
      0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 29, 30, 44, 45, 59, 60,
      74, 75, 89, 90, 104, 105, 119, 120, 134, 135, 149, 150, 164, 165, 179,
      180, 194, 195, 209, 210, 211, 212, 213, 214, 215, 216, 218, 219, 220, 221,
      222, 223, 224, 33, 37, 38, 39, 46, 47, 48, 49, 50, 55, 66, 71, 77, 82, 87,
      93, 94, 98, 102, 109, 110, 114, 117, 122, 125, 126, 130, 132, 137, 141,
      142, 146, 151, 152, 157, 160, 168, 169, 170, 173, 174, 185, 186, 191, 206,
    ],
    torches: [145, 127],
    ladders: [184],
    holes: [34, 118, 40, 28, 64, 182, 183],
    planks: [107],
    coins: [106, 138, 154, 166, 171],
    spike: true,
    sprite: {
      on: true,
      sprites: [
        {
          start: 91, 
          end: 187,
          time: 3000
        },
        {
          start: 22, 
          end: 103,
          time: 5000
        }
      ]
    },
    parachute: {
      thisLevel: false, 
      tileLocation: 27
    },
    exit: 5,
    darkTime: 4500,
    vend: [135,104],
    vendChosen: null
  },
];

/////
/////
/////

class Character {
  constructor(name, torches, ladders) {
    this.name = name;
    this.torches = torches;
    this.ladders = ladders;
    this.planks = 0;
    this.steps = 0;
    this.hasParachute = false;
    this.coins = 0;
    this.location = {};
    this.life = 100;
  }
}

///
/// Establish Various Timers

const startTorchLight = () => {
  torchTimeoutID = setTimeout(function () {}, 4500);
};

const startPauseDark = (pausingDark) => {
  pauseDarkID = setTimeout(function () {
    pausingDark();
    //the *10 is for TESTING ONLY. it keeps the level dark 10 * longer
  }, allLevels[curLvl].darkTime);
};

///
///


/// get user levels from local storage
const addUserLevels = () => {
  let userLevelsJSON = null;
  let userLevels = null;
  if (localStorage.getItem("levels") !== null) {
    userLevelsJSON = localStorage.getItem("levels");
    userLevels = JSON.parse(userLevelsJSON);
    console.log(userLevels);
    userLevels.forEach((level) => {
      allLevels.splice(level.levelOrder, 0, level);
    });
  } else {
    console.log(`no user levels found!`);
  }
};

                  ///                         ///
                  /// Player Placement logic  ///
                  ///                         ///

// PLACE PLAYER START INCLUSIVE OF POSSIBLY CHOOSING RANDOMLY WITHIN A 6 tile space
const playerStartSquare = (startingLocation) => {
  if (startingLocation !== 202 && startingLocation !== 20) {
    return chooseWithinQuadrant(startingLocation);
  } else {
    return startingLocation;
  }
};

//  RANDOMLY CHOOSE A NON WALL TILE WITHIN A 9 tile area
const chooseWithinQuadrant = (holeTile) => {
  const possibleTiles = [-16, -15, -14, -1, 0, +1, +14, +15, +16];
  let offsetSquare;
  for (let i = 0; i < 9; i++) {
    // choose a random number between 0 and 9
    offsetSquare = possibleTiles[Math.floor(Math.random() * 9)];
    // if that number doesnt have a wall or a hole, thats where the player will be placed
    if (
      !tiles[holeTile + offsetSquare].classList.contains("wall") &&
      !tiles[holeTile + offsetSquare].classList.contains("hole")
    ) {
      return holeTile + offsetSquare;
    }
    // if the loop didnt escape the function then just place the player at the exit
  }
  return 20;
};

///
///
///





                      ///                                           ///
                      ///                                           ///
                      ///       UTILITIES & REALTIME FUNCTIONS      ///
                      ///                                           ///
                      ///                                           ///



// Basic Collission detection
const collisionDetector = (objectRect, withWhat) => {
  if (
    objectRect.right > mazzy.location.left &&
    objectRect.left < mazzy.location.right &&
    objectRect.bottom > mazzy.location.top &&
    objectRect.top < mazzy.location.bottom
  ) {
    // Collision detected
    console.log("collission!");
      if (withWhat === "sprite") {
        mazzy.life -= 1;
      } else if (withWhat === "spike") {
        mazzy.life -= 100;
      }
    collissionFx1.play();
    lifeInv.innerText = mazzy.life;
    if (mazzy.life >= 1) {
      return true;
    } else if (mazzy.life <= 0) {
      mazzyDie(withWhat)
      setTimeout(() => {
        clearBrd();
        ending(withWhat);
        curLvl++;
      }, 1000);
    }
  } else {
    // No collision
    console.log('nope')
    return false;
  }
};

// check if a tile is unoccupied
const isUnoccupied = (tile) => {
  if (
    !tiles[tile].classList.contains("wall") &&
    !tiles[tile].classList.contains("hole") &&
    !tiles[tile].classList.contains("coin") &&
    !tiles[tile].classList.contains("plank") &&
    !tiles[tile].classList.contains("plk-appplied") &&
    !tiles[tile].classList.contains("player-plk-appplied") &&
    !tiles[tile].classList.contains("ladder") &&
    !tiles[tile].classList.contains("torch") &&
    !tiles[tile].classList.contains("player") &&
    !tiles[tile].classList.contains("para") &&
    !tiles[tile].classList.contains("exit") &&
    !tiles[tile].classList.contains("ent")
  ) {
    return true;
  } else {
    return false;
  }
};



                  ///                                           ///
                  ///                                           ///
                  ///                ANIMATION                  ///
                  ///                                           ///
                  ///                                           ///



const animate = (elementRef, animationArray, loop, frameRate) => {
  ///set antimationOn flag and start at frame 0
  let animationOn = true;
  let currentFrame = 0;
  
  const animate_advanceFrame = () => {
    if (animationArray[currentFrame].addClass) {
      elementRef.classList.add(animationArray[currentFrame].addClass);
    }
    if (animationArray[currentFrame].removeClass) {
      elementRef.classList.remove(animationArray[currentFrame].removeClass);
    }
    if (!animationOn) {
      if (animationArray[currentFrame].removeElement) {
        elementRef.remove();
      }
      return;
    }
    if (animationArray[currentFrame].sfx) {
      animationArray[currentFrame].sfx.play();
    }

    elementRef.src = animationArray[currentFrame].src;
    if (currentFrame === animationArray.length - 1) {
      if (loop) {
        currentFrame = 0;
      } else {
        animationOn = false;
      }
    } else {
      currentFrame++;
    }
  
    setTimeout(() =>{
        if(animationOn){
          animate_advanceFrame()
        } else {
          animationArray[currentFrame].endFunction(elementRef)
        }
      }, frameRate * animationArray[currentFrame].frameMult);
    };

  if(animationOn) {
    animate_advanceFrame();
  } else {
    return
  }
};



                  ///                                           ///
                  ///                                           ///
                  ///                BEHAVIORS                  ///
                  ///                                           ///
                  ///                                           ///

///Mazzy Death Animation
const mazzyDie = (withWhat) => {
  if (withWhat === 'spike') {
    // animate(mazzySprite, mazzyDieSpikeAnimation, false, 100);
    console.log('here is the animation', withWhat)
  } else if (withWhat === 'sprite'){    
    // animate(mazzySprite, mazzyDieSpriteAnimation, false, 100);
    console.log('here is the animation', withWhat)
  } else {
    console.log('here is the animation', withWhat)
    // animate(mazzySprite, mazzyDieAnimation, false, 100);
  }
}


/// SPRITE 1 BEHAVIOR

//spriteCoordinateGenerator
const setSpriteCoordinates = (tile) => {
  const spriteCoordinateGenerator = () => {
    const getXandY = () => {
      let xCoord = Math.floor(tile%15)*48 
      let yCoord = Math.floor(tile/15)*48 
      return [xCoord, yCoord]
    }
    let x
    let y
    
    if (tile > 14) {
      [x,y] = getXandY(tile)
    } else {
      y = 48
      x = tile*48
    }
      return [x,y]
  }
    return spriteCoordinateGenerator()
}


//sprite movement
let spriteOn = false
const moveSprite = (spriteData, spriteID) => {
  if(spriteOn){

    const sprite1 = document.getElementById(`sprite${spriteID}`);
    
    

    spriteMove.play()
    const s1Start = sprite1.animate(
      [
        { transform: `translate(0, 0)` },
        { transform: `translate(${spriteData.end[0]}px, ${spriteData.end[1]}px)` },
      ],
      {
        duration: spriteData.time,
        easing: "ease-out",
      }
      );
      
      s1Start.onfinish = () => {
        spriteMove.play()
        const s1Return = sprite1.animate(
          [
            { transform: `translate(${spriteData.end[0]}px, ${spriteData.end[1]}px)` },
            { transform: `translate(0, 0)` },
          ],
          {
            duration: spriteData.time,
            easing: "ease-out",
          }
          );
          s1Return.onfinish = () => {
            if(spriteOn) {
            moveSprite(spriteData, spriteID);
            }
          };
        };
  }
};
      
// Sprite Collission
const spriteCollission = () => {
  //get the player element
  const player = document.getElementById("mazzy");
  //set the player element location data to the mazzy object/player class
  mazzy.location = player.getBoundingClientRect();
  //find sprite rectangle
  // const sprite = document.getElementById("sprite1");
  const sprites = document.querySelectorAll(".sprite");
  // const spriteLocation = sprite.getBoundingClientRect();
  // collisionDetector(spriteLocation, "sprite");
  sprites.forEach((sprite, index) => {
    const spriteLocation = sprite.getBoundingClientRect();
    collisionDetector(spriteLocation, "sprite"); // You can use index to identify which sprite collided
  });

};

// spike behavior

let spikeOn = false;

const spikeBehavior = () => {

  let possibleSpikeLoc;
  for (const tile in tiles) {
    possibleSpikeLoc = Math.floor(Math.random() * 210);
    if (isUnoccupied(possibleSpikeLoc)) {
      let spikeTile = document.createElement(`img`);
      spikeTile.id = "spike";
      spikeTile.classList.add('spike')
      tiles[possibleSpikeLoc].appendChild(spikeTile);
      const specificSpike = document.getElementById("spike");
      // start check for collission with spike
      spikeOn=true
      spikeCollissionID = setInterval(spikeCollission, 17);
      animate(specificSpike, spikeAnimation, false, 100);
      break;
    } else {
      continue;
    }
  }
}
// Collission With Spike:
//
// Since the spike appears and disappears, the collission detection is triggered every 17ms BUT first checks
// for "spikeOn" so it's only going to go ahead and get the rectangles if that is true
// "spikeOn" is flipped during the spike behavior sequence above. it's also declared just above that sequence.

const spikeCollission = () => {
  if (spikeOn) {
    //get the player element
    const player = document.getElementById("mazzy");
    //set the player element location data to the mazzy object/player class
    mazzy.location = player.getBoundingClientRect();
    //find sprite rectangle
    const spike = document.querySelector(".spikeHit");
    if(spike){
      const spikeLocation = spike.getBoundingClientRect();
      collisionDetector(spikeLocation, "spike");
    }
  }
};

//start the spike if its in the level

                  ///                         ///
                  /// INITIATE all DETECTIONS ///
                  ///                         ///

///intervalIDs at the top

const initiateEnemiesandCollisions = () => {
  //check for collission with sprite
  if (allLevels[curLvl].sprite.on) {
    spriteOn=true
    // allLevels[curLvl].sprite.sprites.forEach((instance, i) => {
    currentSprites.forEach((instance, i) => {
      moveSprite(instance, i);
    })
    spriteCollissionID = setInterval(spriteCollission, 17);
  }
  if (allLevels[curLvl].spike===true) {
    spikeBehaviorID = setInterval(spikeBehavior, 5000);
    // check for collission with spike
  }
};




                        ///                      ///
                        ///                      ///
                        ///   SETUP GAME BOARD   ///
                        ///                      /// 
                        ///                      ///


const randomVendGenerator = () => {
  if(Math.ceil(Math.random()*10)===3){
    ///add to the vends available
    vendsAvailable ++
    allLevels[curLvl].vendChosen = 0
    return tiles[allLevels[curLvl].vend[0]].classList.add(`vend-left`)
  } else if (Math.ceil(Math.random()*12)===10){
    ///add to the vends available
    vendsAvailable ++
    allLevels[curLvl].vendChosen = 1
    return tiles[allLevels[curLvl].vend[1]].classList.add(`vend-right`)
  }
}

  
  // if (i % 15 !== 14 || i % 15 !== 0) {

const rsetBoard = (lvl, start) => {
  walls.length = 0;
  torchLoc.length = 0;
  ladderLoc.length = 0;
  holeLoc.length = 0;
  ladderLoc.length = 0;
  plankLoc.length = 0;
  coinLoc.length = 0;

  // start ? playerLoc = 202 : playerLoc = 20

  entLoc = 217;
  // entLoc = playerLoc + 15
  curLvlName = allLevels[curLvl].name;
  placeWalls(allLevels[lvl].walls);
  placeItems(
    allLevels[lvl].ladders,
    allLevels[lvl].torches,
    allLevels[lvl].exit,
    allLevels[lvl].holes,
    allLevels[lvl].planks,
    allLevels[lvl].coins
  );
  getWalls();
  getCoins();
  getTorches();
  getLadder();
  getPlanks();
  getHoles();
  console.log(allLevels[lvl].sprite.on)
  playerLoc = playerStartSquare(start);
  placePlayer();
  const pauseDark = () => {
    makeDark();
    makeLight();
  };
  
  startPauseDark(pauseDark);
  
  if ( allLevels[lvl].parachute.thisLevel) {
    tiles[allLevels[lvl].parachute.tileLocation].classList.add(`para`);
  }
  const levelDsp = document.querySelector(`.display-level`);
  levelDsp.innerText = allLevels[curLvl].name;
  if (allLevels[lvl].sprite.on) {
    placeSprite(allLevels[lvl].sprite);
  }
  
  initiateEnemiesandCollisions();
  
};

                    ///                  /// 
                    ///                  ///
                    /// Place Everything ///
                    ///                  /// 
                    ///                  ///

///place walls
const placeWalls = (levelWalls) => {
  levelWalls.forEach((wallTile, i) => {
    tiles[wallTile].classList.add(`wall`);
  });
  tiles.forEach((tile, i) => {
    let lt = i - 1;
    let rt = i + 1;
    let up = i - 15;
    let dn = i + 15;
    ///in the top row check for connecting walls below, if so make a tdown, if not just make whorizontal
    if (tiles[i].classList.contains("wall")) {
      if (i >= 1 && i < 14) {
        if (tiles[dn].classList.contains("wall")) {
          tiles[i].classList.add(`tvertdn`);
        } else {
          tiles[i].classList.add(`whor`);
        }
      }
      ///in the bottom row, check for connecting walls above, if so make tup, if not make whorizontal
      if (i >= 211 && i < 224) {
        if (tiles[up].classList.contains("wall")) {
          tiles[i].classList.add(`tvertup`);
        } else {
          tiles[i].classList.add(`whor`);
        }
      }
      ///check walls on the right edge for connecting walls on the left, if so make a tleft, if not make wvert
      if (i % 15 === 14) {
        if (tiles[lt].classList.contains("wall")) {
          if (i > 14 && i < 224) {
            tiles[i].classList.add(`tleft`);
          }
        } else {
          tiles[i].classList.add(`wvert`);
        }
      }
      ///check walls on the left edge for connecting walls on the right, if so make tright, if not make wvert
      if (i % 15 === 0) {
        if (tiles[rt].classList.contains("wall")) {
          if (i > 0 && i < 210) {
            tiles[i].classList.add(`tright`);
          }
        } else {
          tiles[i].classList.add(`wvert`);
        }
      }
      ///check all walls between the top row and bottom row
      if (i >= 15 && i <= 209) {
        ///but dont include walls on the right or left edge
        if (i % 15 !== 14 || i % 15 !== 0) {
          ///SW corner tiles
          if (
            tiles[rt].classList.contains(`wall`) &&
            !tiles[lt].classList.contains(`wall`) &&
            !tiles[dn].classList.contains(`wall`) &&
            tiles[up].classList.contains(`wall`)
          ) {
            tiles[i].classList.add(`swcorner`);
          } else if (
            ///SE corner tiles
            !tiles[rt].classList.contains(`wall`) &&
            tiles[lt].classList.contains(`wall`) &&
            !tiles[dn].classList.contains(`wall`) &&
            tiles[up].classList.contains(`wall`)
          ) {
            tiles[i].classList.add(`secorner`);
          } else if (
            ////NW corner tiles
            tiles[rt].classList.contains(`wall`) &&
            !tiles[lt].classList.contains(`wall`) &&
            tiles[dn].classList.contains(`wall`) &&
            !tiles[up].classList.contains(`wall`)
          ) {
            tiles[i].classList.add(`nwcorner`);
          } else if (
            /// NE corner tiles
            !tiles[rt].classList.contains(`wall`) &&
            tiles[lt].classList.contains(`wall`) &&
            tiles[dn].classList.contains(`wall`) &&
            !tiles[up].classList.contains(`wall`)
          ) {
            tiles[i].classList.add(`necorner`);
          } else if (
            /// Horizontal wall
            tiles[rt].classList.contains(`wall`) &&
            tiles[lt].classList.contains(`wall`) &&
            !tiles[dn].classList.contains(`wall`) &&
            !tiles[up].classList.contains(`wall`)
          ) {
            tiles[i].classList.add(`whor`);
          } else if (
            ///Vertical wall
            !tiles[rt].classList.contains(`wall`) &&
            !tiles[lt].classList.contains(`wall`) &&
            tiles[dn].classList.contains(`wall`) &&
            tiles[up].classList.contains(`wall`)
          ) {
            tiles[i].classList.add(`wvert`);
          } else if (
            ///Cross
            tiles[rt].classList.contains(`wall`) &&
            tiles[lt].classList.contains(`wall`) &&
            tiles[dn].classList.contains(`wall`) &&
            tiles[up].classList.contains(`wall`)
          ) {
            tiles[i].classList.add(`cross`);
          } else if (
            ///T going up
            tiles[rt].classList.contains(`wall`) &&
            tiles[lt].classList.contains(`wall`) &&
            !tiles[dn].classList.contains(`wall`) &&
            tiles[up].classList.contains(`wall`)
          ) {
            tiles[i].classList.add(`tvertup`);
          } else if (
            ///T going down
            tiles[rt].classList.contains(`wall`) &&
            tiles[lt].classList.contains(`wall`) &&
            tiles[dn].classList.contains(`wall`) &&
            !tiles[up].classList.contains(`wall`)
          ) {
            tiles[i].classList.add(`tvertdn`);
          } else if (
            ///T going right
            tiles[rt].classList.contains(`wall`) &&
            tiles[dn].classList.contains(`wall`) &&
            tiles[up].classList.contains(`wall`)
            // !tiles[lt].classList.contains(`wall`)
          ) {
            if (!tiles[lt].classList.contains(`wall`)) {
              if (i % 15 != 14) {
                tiles[i].classList.add(`tright`);
              }
            }
          } else if (
            ///T going left
            tiles[lt].classList.contains(`wall`) &&
            tiles[dn].classList.contains(`wall`) &&
            tiles[up].classList.contains(`wall`)
          ) {
            if (!tiles[rt].classList.contains(`wall`)) {
              if (i % 15 != 0) {
                tiles[i].classList.add(`tleft`);
              }
            }
          } else if (
            ///No connecting walls
            !tiles[rt].classList.contains(`wall`) &&
            !tiles[lt].classList.contains(`wall`) &&
            !tiles[dn].classList.contains(`wall`) &&
            !tiles[up].classList.contains(`wall`)
          ) {
            tiles[i].classList.add(`pillar`);
          } else if (
            ///under but not over, vert end cap up
            !tiles[rt].classList.contains(`wall`) &&
            !tiles[lt].classList.contains(`wall`) &&
            tiles[dn].classList.contains(`wall`) &&
            !tiles[up].classList.contains(`wall`)
          ) {
            tiles[i].classList.add(`vert-end-up`);
          } else if (
            ///over but not under, vert end cap dn
            !tiles[rt].classList.contains(`wall`) &&
            !tiles[lt].classList.contains(`wall`) &&
            !tiles[dn].classList.contains(`wall`) &&
            tiles[up].classList.contains(`wall`)
          ) {
            tiles[i].classList.add(`vert-end-dn`);
          } else if (
            ///right but not left, hor end cap left
            tiles[rt].classList.contains(`wall`) &&
            !tiles[lt].classList.contains(`wall`) &&
            !tiles[dn].classList.contains(`wall`) &&
            !tiles[up].classList.contains(`wall`)
          ) {
            tiles[i].classList.add(`hor-end-lt`);
          } else if (
            ///left but not right, hor end cap right
            !tiles[rt].classList.contains(`wall`) &&
            tiles[lt].classList.contains(`wall`) &&
            !tiles[dn].classList.contains(`wall`) &&
            !tiles[up].classList.contains(`wall`)
          ) {
            tiles[i].classList.add(`hor-end-rt`);
          }
        }
      }
    }
  });

  // BOARD CORNERS AND ENTRY/EXITS
  tiles[0].classList.add(`nwcorner`);
  tiles[14].classList.add(`necorner`);
  tiles[210].classList.add(`swcorner`);
  tiles[224].classList.add(`secorner`);
  ///check if 3 vending machines have already been dispersed]
  if(allLevels[curLvl].vendChosen === null){
    if(vendsAvailable < 4){
      randomVendGenerator()
    }
  } else {
    if(allLevels[curLvl].vendChosen === 0){
      tiles[allLevels[curLvl].vend[0]].classList.add(`vend-left`)
    } else if ((allLevels[curLvl].vendChosen === 1)) {
      tiles[allLevels[curLvl].vend[1]].classList.add(`vend-right`)
    }
  }


  // tiles[exitLoc + 1].classList.add(`whor`);
  // tiles[exitLoc + 1].classList.remove(`wvert`);
  tiles[entLoc].classList.add(`ent`);

  // tiles[entLoc + 1].classList.add(`whor`);
  // tiles[entLoc + 1].classList.remove(`wvert`);
};

///place items
const placeItems = (ldrs, trchs, exit, holes, planks, cns) => {
  tiles[exit].classList.add(`exit`);
  ldrs.forEach((ldrs) => {
    tiles[ldrs].classList.add(`ladder`);
  });
  trchs.forEach((trc) => {
    tiles[trc].classList.add(`torch`);
  });
  holes.forEach((hole) => {
    tiles[hole].classList.add(`hole`);
  });
  planks.forEach((plank) => {
    tiles[plank].classList.add(`plank`);
  });
  cns.forEach((cn) => {
    tiles[cn].classList.add(`coin`);
  });
};

const placePlayer = () => {
  tiles[playerLoc].classList.add(`player`);
  tiles[playerLoc].appendChild(mazzySprite)
  // tiles[playerLoc].innerHTML = `<img id="mazzy" src=pics/mazzy.png>`;
  // const createdMazzy = document.createElement('img')
  // createdMazzy.src='pics/mazzy.png'
  // createdMazzy.id='mazzy'
  // mazzySprite = createdMazzy
  if ((playerLoc !== 20) & (playerLoc !== 202)) {
    fallfx.play();
  }
};

const placeSprite = () => {
  const gameBoard = document.getElementById("game-board");
  let startCoords =[]
  let endCoordsUnmodified
  let endCoordsModified = []
  allLevels[curLvl].sprite.sprites.forEach((sprte, i) =>{
    //feed in start and end tiles that setSpriteCoordinates will translate to 
    ///coordinates and then add them to the sprites array to be used later
    startCoords = setSpriteCoordinates(sprte.start)
    endCoordsUnmodified = setSpriteCoordinates(sprte.end)
    endCoordsModified = [endCoordsUnmodified[0]-startCoords[0], endCoordsUnmodified[1]-startCoords[1]]
    currentSprites.push({start: startCoords, end: endCoordsModified, time: allLevels[curLvl].sprite.sprites[i].time})
    const sprite = document.createElement("img");
    sprite.classList.add("sprite");
    sprite.setAttribute("src", "pics/Sprite.gif");
    sprite.setAttribute("id", `sprite${i}`);
    sprite.style.left = startCoords[0]+"px"; // Replace with your desired value
    sprite.style.top = startCoords[1]+"px";   // Replace with your desired value
    gameBoard.appendChild(sprite);
  })
};

///
///
///Get Everything
///
///

///get all walls
const getWalls = () => {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].classList.contains(`wall`)) {
      walls.push(i);
    } else {
      noWall.push[i];
    }
  }
};

//// get the torch locations
const getTorches = () => {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].classList.contains(`torch`)) {
      torchLoc.push(i);
    }
  }
};

//// get the ladder locations
const getLadder = () => {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].classList.contains(`ladder`)) {
      ladderLoc.push(i);
    }
  }
};
//// get the plank locations
const getPlanks = () => {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].classList.contains(`plank`)) {
      plankLoc.push(i);
    }
  }
};
//// get holes locations
const getHoles = () => {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].classList.contains(`hole`)) {
      holeLoc.push(i);
    }
  }
};

///get Coins locations
const getCoins = () => {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].classList.contains(`coin`)) {
      coinLoc.push(i);
    }
  }
};

///
///
/// Active Gameplay Functions
///
///

///make the board dark
const makeDark = () => {
  darkOn = 1;
  const blackImg = document.createElement('img')
  blackImg.src='pics/ctrBlack2.png'
  blackImg.classList.add('black')
  tiles.forEach((tile) => {
    if (
      tile.classList.contains(`torch`) ||
      tile.classList.contains(`ladder`) ||
      tile.classList.contains(`exit`) ||
      tile.classList.contains(`ent`) ||
      tile.classList.contains(`player`) ||
      tile.classList.contains(`plank`) ||
      tile.classList.contains(`ldr-applied`) ||
      tile.classList.contains(`plk-applied`) ||
      tile.classList.contains(`spike`)
    ) {
    } else {
      const blackElement = tile && tile.querySelector('.black');
      if (!blackElement){
      const blackImg = document.createElement('img')
      blackImg.src='pics/ctrBlack2.png'
      blackImg.classList.add('black')
      tile.appendChild(blackImg);
      }
    }
  });
};

///set lighted area
const makeLight = () => {
  let lit = [];
  if (torchOn === 0) {
    lit = [playerLoc];
  } else {
    lit = [
      playerLoc,
      playerLoc - 16,
      playerLoc - 15,
      playerLoc - 14,
      playerLoc - 1,
      playerLoc + 1,
      playerLoc + 14,
      playerLoc + 15,
      playerLoc + 16,
      playerLoc - 31,
      playerLoc - 30,
      playerLoc - 29,
    ];
  }

  lit.forEach((tile) => {
    const blackElement = tiles[tile] && tiles[tile].querySelector('.black');
      if (blackElement) {
        blackElement.remove();
      }
    })
  }
  //   if (tiles[tile].classList.contains(`ldr-applied`)) {
  //   } else {
  //     const blackElement = tiles[tile].querySelector(".black");
  //     if (blackElement) {
  //       blackElement.remove();
  //     }
  //   }
  // });

////checking for torches at player
const checkTorch = () => {
  let torchNow = torchLoc.includes(playerLoc);
  if (torchNow === true) {
    addTorch();
  }
};

////for checking for ladders at player
const checkLadder = () => {
  let ladderNow = ladderLoc.includes(playerLoc);
  if (ladderNow === true) {
    addLadder();
  }
};

////checking for planks at player
const checkPlank = () => {
  let plankNow = plankLoc.includes(playerLoc);
  if (plankNow === true) {
    addPlank();
  }
};

////checking for coins at player
const checkCoin = () => {
  let coinNow = coinLoc.includes(playerLoc);
  if (coinNow === true) {
    addCoin();
  }
};
////function for checking for parachute
const checkPara = () => {
  if (tiles[playerLoc].classList.contains(`para`)) {
    addPara();
  }
};


///
/// ADDING
///
///

///addLife

const addLife = (amountToAdd) => {
  mazzy.life = mazzy.life+=amountToAdd
  lifeInv.innerHTML = mazzy.life
}

///adding torches to your inv
const addTorch = (vend) => {
  if(!vend){
    tiles[playerLoc].classList.remove(`torch`);
    torchLoc.forEach((tor, i) => {
      if (tor === playerLoc) {
        torchLoc.splice(i, 1);
      }
    });
  }
  if (mazzy.torches === 0) {
    let trchDiv = document.createElement(`div`);
    trchDiv.innerHTML = `<img src=pics/torch.png>`;
    trchDiv.classList.add(`inv-trch`);
    trchCount.classList.add(`trch-count`);
    trchDiv.append(trchCount);
    invDiv.append(trchDiv);
  }
  getFx.play();
  getFx.volume = 0.3;
  mazzy.torches += 1;
  trchCount.innerText = mazzy.torches;
};

///adding ladders to your inv
const addLadder = (vend) => {
  if (!vend){
    tiles[playerLoc].classList.remove(`ladder`);
    ladderLoc.forEach((lad, i) => {
      if (lad === playerLoc) {
        ladderLoc.splice(i, 1);
      }
    });
  }
  if (mazzy.ladders === 0) {
    let ladderDiv = document.createElement(`div`);
    // let trchCount = document.createElement(`span`)
    ladderDiv.innerHTML = `<img src=pics/ladder.png>`;
    ladderDiv.classList.add(`inv-ladder`);
    ladderCount.classList.add(`ldr-count`);
    ladderDiv.append(ladderCount);
    invDiv.append(ladderDiv);
    getFx.play();
  }
  getFx.play();
  getFx.volume = 0.3;
  mazzy.ladders += 1;
  ladderCount.innerText = mazzy.ladders;
};

///adding plank to your inv
const addPlank = (vend) => {
  if(!vend){
    tiles[playerLoc].classList.remove(`plank`);
    plankLoc.forEach((plk, i) => {
      if (plk === playerLoc) {
        plankLoc.splice(i, 1);
      }
    });
  }
    if (mazzy.planks === 0) {
    let plankDiv = document.createElement(`div`);
    // let trchCount = document.createElement(`span`)
    plankDiv.innerHTML = `<img src=pics/planks.png>`;
    plankDiv.classList.add(`inv-plank`);
    plankCount.classList.add(`plk-count`);
    plankDiv.append(plankCount);
    invDiv.append(plankDiv);
  }
  getFx.play();
  getFx.volume = 0.3;
  mazzy.planks += 1;
  plankCount.innerText = mazzy.planks;
  };

///adding parachute to your inv
const addPara = () => {
  tiles[playerLoc].classList.remove(`para`);
  let paraDiv = document.createElement(`div`);
  // let trchCount = document.createElement(`span`)
  paraDiv.innerHTML = `<img src=pics/parachute.png>`;
  paraDiv.classList.add(`inv-para`);
  paraCount.classList.add(`para-count`);
  paraDiv.append(paraCount);
  invDiv.append(paraDiv);
  mazzy.hasParachute = true;
  plankCount.innerText = `1`;
  paraGet.play();
};

///adding a coin to your inv
const addCoin = (amt) => {
  if(!amt) {
    coinLoc.forEach((cn, i) => {
      if (cn === playerLoc) {
        coinLoc.splice(i, 1);
      }
    });
  }
  coinfx.play();
  coinfx.volume = 0.3;
  tiles[playerLoc].classList.remove(`coin`);
  if (amt) {
    mazzy.coins += amt;
  } else {
    mazzy.coins += 1;
  }
  let cnCnt = document.querySelector(`.cn-count`);
  cnCnt.innerText = mazzy.coins;
};

///USING a Torch

const torchFail = (lvl) => {
    clearTimeout(torchTimeoutID)
    makeDark();
    torchOn = 0;
    makeLight();
    denyFx.play();
};

const useTorch = () => {
  if (mazzy.torches > 0 && darkOn === 1) {
    mazzy.torches -= 1;
    trchCount.innerText = mazzy.torches;
    torchOn = 1;
    torchfx.play();
    torchfx.volume = 0.3;
    makeLight();
    let lvlNow = curLvl;
    torchTimeoutID = setTimeout(() => {
      torchFail(lvlNow);
    }, 4500);
    if (mazzy.torches === 0) {
      const trcDiv = document.querySelector(`.inv-trch`);
      const ldrCntTxt = document.querySelector(`.trch-count`);
      trcDiv.remove();
    }
  }
};

///USING a Ladder
const useLadder = (lkAhd) => {
  if (mazzy.ladders > 0) {
    // let newLad = lkAhd
    let wallRmv = 0;
    walls.forEach((wall, i) => {
      if (wall === lkAhd) {
        wallRmv = i;
      }
      ladderfx.play();
      ladderfx.volume = 0.3;
    });
    tiles[lkAhd].innerHTML = `<img id="ladder" src=pics/ladder.png>`;
    tiles[lkAhd].classList.add(`ldr-applied`);
    mazzy.ladders -= 1;
    ladderCount.innerText = mazzy.ladders;
    tiles[lkAhd].classList.remove(`wall`);
    walls.splice(wallRmv, 1);
    if (mazzy.ladders === 0) {
      const ldrDiv = document.querySelector(`.inv-ladder`);
      const ldrCntTxt = document.querySelector(`.ldr-count`);
      ldrDiv.remove();
    }
  }
};

///USING a Plank
const usePlank = (lkAd) => {
  ladderfx.play();
  ladderfx.volume = 0.3;
  // tiles[lkAd].innerHTML = `<img id="planks" src=pics/holeplank.png>`
  tiles[lkAd].classList.add(`plk-applied`);
  mazzy.planks -= 1;
  plankCount.innerText = mazzy.planks;
  tiles[lkAd].classList.remove(`hole`);
  tiles[lkAd].classList.add(`hole-covered`);
  if (mazzy.planks === 0) {
    const plkDiv = document.querySelector(`.inv-plank`);
    const ldrCntTxt = document.querySelector(`.plk-count`);
    plkDiv.remove();
  }
};

///
///
/// EXITING A LEVEL AND STARTING A NEW ONE
///
///

////Setboard takes params for: 1.walls 2.ladders 3.torches 4.exitloc 5.holes 6.planks 7.IF it IS initially dark 8.coins
const rexit = (start) => {
  const levelDsp = document.querySelector(`.display-level`);
  darkOn = 0;
  lookAhead = 187;
  exitfx.play();
  exitfx.volume = 0.2;
  if (curLvl === 0) {
    curLvl = 1;
  }
  if (curLvl === allLevels.length) {
    curLvl++;
    clearBrd();
    ending("win");
  } else {
    clearBrd();
    rsetBoard(curLvl, start);
  }
};

///
///
/// CLEAR BOARD
///
///

function clearBrd() {
    clearTimeout(torchTimeoutID);
    torchTimeoutID = null
    torchOn = 0
  console.log(torchOn)
  clearTimeout(pauseDarkID);
  clearInterval(spriteCollissionID);
  clearInterval(spikeCollissionID);
  clearInterval(spikeBehaviorID);
  spikeOn = false
  spriteOn = false
  //clearout current sprites
  currentSprites.length=0
  const spritesToBeRemoved = document.querySelectorAll('.sprite')
  spritesToBeRemoved.forEach((sprte)=>{
    const currentAnimation = sprte.getAnimations()[0];
    currentAnimation.cancel();
    sprte.remove()
  })
  tiles.forEach((tile, i) => {
    tiles[i].className = `tile`;
    tiles[i].innerHTML = ``;
  });
}

///
///ENDINGS
///
const playEndSong = () => {
  endSong.play();
};

const ending = (endType) => {
  endVend()
  clearTimeout(pauseDarkID);
  if (torchTimeoutID) {
    clearTimeout(torchTimeoutID);
    torchTimeoutID = null
    torchOn = 0
  }
  clearInterval(spriteCollissionID);
  clearInterval(spikeCollissionID);
  clearInterval(spikeBehaviorID);
  let gameBrd = document.querySelector(`.game`);
  document.body.style.backgroundImage = "url(pics/darktower.gif)";
  gameBrd.style.backgroundImage = "url()";
  ended = 1;
  const endDiv = document.getElementById(`t32`);
  endDiv.classList.add(`end-div`);
  endDiv.classList.remove(`tile`);
  const resultH1 = document.createElement(`h1`);
  resultH1.classList.add(`result`);
  const endP = document.createElement(`p`);
  const endUl = document.createElement(`ul`);
  const endStep = document.createElement(`li`);
  const endCoin = document.createElement(`li`);
  const endTorch = document.createElement(`li`);
  const endLadder = document.createElement(`li`);
  const endPlank = document.createElement(`li`);
  backgroundMusic.pause();

  if (endType === "win" && mazzy.hasParachute === true) {
    resultH1.innerText = `You Made It!!`;
    const endGood =
      document.createTextNode(`Mazzy has reached the top of The Maze Tower!  He looks out over the landscape from the top of the massive 
    tower.  With the giant door to the tower closing behind him... he takes a deep breath, throws on the parachute and jumps to freedom!`);
    endDiv.append(resultH1);
    endP.append(endGood);
    winfx.play();
    setTimeout(playEndSong(), 2000);
  } else if (endType === "win" && mazzy.hasParachute === false) {
    resultH1.innerText = `Oh No!`;
    const endBad =
      document.createTextNode(`Mazzy has reached the top of The Maze Tower!  He looks out over the landscape from the top of the massive 
    tower.  With the giant door to the tower closing behind him... he takes a deep breath. He decides to jump to freedom.... As he falls he 
    realizes that he has no parachute to aid his fall... he grimmaces. He thinks of how dumb this all was... that he could have just walked out the door at the bottom level.  Then SPLAT!! He dies.`);
    endDiv.append(resultH1);
    endP.append(endBad);
    fallfx.play();
  } else if (endType === "fell") {
    resultH1.innerText = `You Died!`;
    const endFell = document.createTextNode(
      `Mazzy fell through a hole in the floor. For a split second all he saw was darkness... then... SPLAT! He died.`
    );
    fallfx.play();
    endDiv.append(resultH1);
    endP.append(endFell);
  } else if (endType === "sprite") {
    resultH1.innerText = `You Died!`;
    const endFell = document.createTextNode(
      `Not sure what that mystical creature was... but it killed Mazzy.... Bummer.`
    );
    fallfx.play();
    endDiv.append(resultH1);
    endP.append(endFell);
  } else if (endType === "spike") {
    resultH1.innerText = `You Died!`;
    const endSpike = document.createTextNode(
      `You got impaled by spikes.  Perhaps you needed pinchers of hell.`
    );
    fallfx.play();
    endDiv.append(resultH1);
    endP.append(endSpike);
  }
  endDiv.append(endP);
  endUl.innerHTML = `Ending Stats:`;
  endStep.innerText = `Mazzy took ${mazzy.steps} steps`;
  endCoin.innerText = `Mazzy collected ${mazzy.coins} coins`;
  endTorch.innerText = `Mazzy has ${mazzy.torches} torches left`;
  endLadder.innerText = `Mazzy has ${mazzy.ladders} ladders left`;
  endPlank.innerText = `Mazzy has ${mazzy.planks} planks left`;
  endUl.append(endStep);
  endUl.append(endCoin);
  endUl.append(endTorch);
  endUl.append(endLadder);
  endUl.append(endPlank);
  endDiv.append(endUl);
  ///restart button takes you to the index of the game
  const reStart = document.createElement(`button`);
  endDiv.append(reStart);
  reStart.innerText = `Restart Game`;
  reStart.addEventListener(`click`, () => {
    ended = 0;
    window.location.href = "index.html";
  });
};

                                  ///                     ///
                                  ///                     ///
                                  ///    START THE GAME   ///
                                  ///                     ///
                                  ///                     ///


                                  const mazzy = new Character(`Mazzy`, 0, 0);
                                  //create mazzySprite
                                  const createdMazzy = document.createElement('img')
                                  createdMazzy.src='pics/mazzy.png'
                                  createdMazzy.id='mazzy'
                                  mazzySprite = createdMazzy
                                  curLvl++;
                                  addUserLevels();
                                  
                                  ///                                          ///
                                  /// THINGS THAT HAVE TO WAIT FOR DOM TO LOAD ///
                                  ///                                          ///
                
                document.addEventListener("DOMContentLoaded", function () {
                  console.log("DOM Loaded");
                  rexit((start = 202));
                });
                
                ///
                ///
                ///
                ///
                                  

///                     ///
///                     ///
/// GAMEPLAY & MOVEMENT ///
///                     ///
///                     ///


///
///VEND
///
const vendSelections=['vend-exit', 'vend-ladder', 'vend-planks', 'vend-torch', 'vend-life']
let vendIndex = 1
let whereWasVend

const initVend = () => {
  vendOn=true
  lookAhead = playerLoc
  const vendingMachine = document.querySelector('#vend')
  vendingMachine.classList.add('vend-on')
  vendingMachine.classList.remove('vend-off')
} 

const endVend = () => {
  vendOn=false
  const nowSelection = document.getElementById(vendSelections[vendIndex])
  vendIndex = 1
  nextVendSelection(nowSelection)
  const vendingMachine = document.querySelector('#vend')
  vendingMachine.classList.add('vend-off')
  vendingMachine.classList.remove('vend-on')
}

const nextVendSelection = (nowSelection) => {
  const nextSelection = document.getElementById(vendSelections[vendIndex])
  nextSelection.classList.add('selected')
  nowSelection.classList.remove('selected')
  // return nowSelection.id
}

const selectVendItem = () => {
  if(vendIndex === 0){
    vendExit.play()
    endVend()
  }
  else if(vendIndex === 1){
    if(mazzy.coins >= 4){
      vendAccept.play()
      addCoin(-4)
      addLadder(vend=true)
    } else {
      fallFloorfx.play()
    }
  }
  else if(vendIndex === 2){
    if(mazzy.coins >= 3){
      vendAccept.play()
      addCoin(-3)
      addPlank(vend=true)
    } else {
      fallFloorfx.play()
    }
  }
  else if(vendIndex === 3){
    if(mazzy.coins >= 2){
      vendAccept.play()
      addCoin(-2)
      addTorch(vend=true)
    } else {
      fallFloorfx.play()
    }
  }
  else if(vendIndex === 4){
    if(mazzy.coins >= 9){
      vendAccept.play()
      addCoin(-9)
      addLife(45)
    } else {
    fallFloorfx.play()
  }
  }
}
///
///
///


  window.addEventListener(`keydown`, (event) => {
    if (mazzy.steps === 0) {
      backgroundMusic.play();
      backgroundMusic.loop = true;
      backgroundMusic.volume = 0.1;
    }

    if (ended === 0) {
      ///Grab steps h2 to count steps
      let stepCnt = document.querySelector(`.steps-count`);
      ///select div with player class
      let plyr = document.querySelector(`.player`);
      ///establish lookahead

      ///establish a variable to track the difference between current location and proposed location
      let tileDifference = 0;
      ///for which ever arrow key, set the look ahead tiles as player+=appropriate value
      switch (event.key) {
        case `ArrowUp`:
          if(!vendOn){
          tileDifference = -15;
          lookAhead = playerLoc + tileDifference;
        } else if (vendOn) {
          const nowSelection = document.getElementById(vendSelections[vendIndex])
          if(vendIndex === 0){
            vendIndex=whereWasVend
            nextVendSelection(nowSelection)
          } 
        }
        break;
        case `ArrowRight`:
          if (!vendOn){
            tileDifference = 1;
            lookAhead = playerLoc + tileDifference;
          } else if (vendOn) {
            const nowSelection = document.getElementById(vendSelections[vendIndex])
            if(vendIndex === 4){
              vendIndex=1
            } else {
              vendIndex++
            }
            nextVendSelection(nowSelection)
          }
          break;
          case "ArrowDown":
            if(!vendOn) {
              tileDifference = 15;
              lookAhead = playerLoc + tileDifference;
            } else if (vendOn){
              const nowSelection = document.getElementById(vendSelections[vendIndex])
              if(vendIndex!=0){
                whereWasVend=vendIndex
                vendIndex = 0
                nextVendSelection(nowSelection)
              }
            }
            break;
            case `ArrowLeft`:
              if(!vendOn) {
                tileDifference = -1;
                lookAhead = playerLoc + tileDifference;
              } else if (vendOn) {
                const nowSelection = document.getElementById(vendSelections[vendIndex])
                if(vendIndex === 1){
                  vendIndex = 4
                } else {
                  vendIndex--
                }
                nextVendSelection(nowSelection)
              }
              break;
              case `l`:
                if(!vendOn) {
            useLadder(lookAhead);
          }
          break;
        case `t`:
          if(!vendOn) {
            useTorch();
          }
          break;
        case `v`:
          if(vendOn) {
            endVend()
          }
          case ` `:
            if(vendOn) {
              selectVendItem()
          }
          break;
        default:
          break;
      }
      ///check if the lookahead is equal to a wall
      let noGo = walls.some((wall) => {
        return wall === lookAhead;
      });
      ///IF YOU CAN GO
      if (noGo === false) {
        if (lookAhead === exitLoc) {
          curLvl++;
          // place player at the start location
          rexit((start = 202));
        } else if (lookAhead === entLoc && curLvl > 1) {
          curLvl--;
          // place player at exit door
          rexit((start = 20));
        } else if (tiles[lookAhead].classList.contains(`hole`)) {
          if (mazzy.planks === 0) {
            if (curLvl > 1) {
              curLvl--;
              let holeLocationId = tiles[lookAhead].getAttribute("id");
              let holeParsedId = parseInt(holeLocationId.substring(1));
              fallFloorfx.play();
              rexit((start = holeParsedId));
            } else {
              clearBrd();
              ending("fell");
              curLvl++;
            }
          } else {
            usePlank(lookAhead);
          }

        } else {
          if(!vendOn) {
            ///removing player from current location
            tiles[playerLoc].classList.remove("player");
            playerLoc += tileDifference;
            ///setting new location
            ///adding player to that new location
            tiles[playerLoc].appendChild(mazzySprite)
            tiles[playerLoc].classList.add(`player`);
            
            mazzy.steps += 1;
            stepFx.play();
            stepCnt.innerHTML = mazzy.steps;
            ///if you go to a torch spot or whatever
            checkTorch();
            checkLadder();
            checkPlank();
            checkPara();
            checkCoin();
            if (darkOn === 1) {
              makeDark();
              makeLight();
            }
          }
        }
        ///you CANNOT go
      } else if (noGo === true) {
        plyr.classList.remove("player");
        playerLoc += 0;
        tiles[playerLoc].classList.add(`player`);
        if(tiles[lookAhead].classList.contains('vend-right') || tiles[lookAhead].classList.contains('vend-left')){
          initVend()
        }
      }
    }
  });

