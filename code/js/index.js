

const gameCanvas = document.querySelector('canvas')
const ctx = gameCanvas.getContext('2d')

//Getting Divs for display style (hide - show divs - game states)
let landingPage = document.getElementById('mockup');
let startButton = document.getElementById('game');
landingPage.style.display = "block";
startButton.style.display = "none";

let winner = document.getElementById('winner');
let loser = document.getElementById('loser');
winner.style.display = "none";
loser.style.display = "none";
// let lose =document.getElementById('');
// let win =document.getElementById('');



gameCanvas.width = 64 * 16; //1024;
gameCanvas.height = 64 * 9; //576;

// canvas - Game Area
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);


var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

// States Control // Landing page - Game Page - Game Over

function startGame() {
    openFullscreen();
    landingPage.style.display = "block";
    if (startButton.style.display = "none") {
        startButton.style.display = "block";
        landingPage.style.display = "none";
        // animate(); --- blows up the game --- extra fast
    } else {
        startButton.style.display = "none";
        landingPage.style.display = "block";
    }

    
}



function lose() {
    console.log("RUNNING GAMEOVER");
    landingPage.style.display = "none";
    if (startButton.style.display = "block") {
        startButton.style.display = "none";
        landingPage.style.display = "none";
        winner.style.display = "none";
        loser.style.display = "block";
    } else {
        startButton.style.display = "block";
        landingPage.style.display = "none";
        winner.style.display = "none";
        loser.style.display = "block";
        
    } 
}

function win() {
    console.log("RUNNING WINNING");
    score=0;
    landingPage.style.display = "none";
    if (startButton.style.display = "block") {
        startButton.style.display = "none";
        landingPage.style.display = "none";
        winner.style.display = "block";
        loser.style.display = "none";
        enemy.velocity.x = 0;

    } else {
        startButton.style.display = "block";
        landingPage.style.display = "none";
        winner.style.display = "none";
        loser.style.display = "none";

    }
}




let score = 0;

function drawScore() {
    ctx.font = "40px Georgia Sans-serif";
    ctx.fillStyle = "white";
    ctx.fillText(`Score: ${score}`, gameCanvas.width -200, 50);
  }




//Player - needs
//position (object with x and y) +
//size (object with width and height) +
//velocity/speed (object with x and y)

// + gravity

//check how to turn on and off gravity
// after liftoff player should be controled with up and down... with boosters off = gravity!!

const gravity = .25;
//const speed = 0.15;  -- fail

let playerCheck = 100


// Players 
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100,
        }
        this.size = {
            width: 50,
            height: 101,
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
    }

    draw() {

        ctx.drawImage(ironMan, this.position.x, this.position.y, this.size.width, this.size.height)
    }

    update() {

        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        // Basic Gravity Simulation  by Chris Courses
        if (this.position.y + this.size.height + this.velocity.y <= gameCanvas.height) { //should be reviewed as it's no the same as Chris
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
        }
    }
}

class Enemy {
    constructor(positionX, positionY) {
        this.position = {
            x: positionX,
            y: positionY,
        }
        this.size = {
            width: 83,
            height: 202,
        }
        this.velocity = {
            x: (Math.random() * 4),
            y: 0,
        }
    }

    draw() {

        ctx.drawImage(brain, this.position.x, this.position.y, this.size.width, this.size.height)
    }

    update() {
        this.position.x -= this.velocity.x

        if(score >10 && score <15){
            this.position.x -= 3.6
        } else if(score >=15 && score <25){
            this.position.x -= 5.4
        }
        else if(score >=25){
            this.position.x -=6.3
        }
    }
}

let randomEnemyArr = [
    new Enemy(1500, 250),
    new Enemy(1800, 100),
    new Enemy(1700, 300),
    new Enemy(3900, 250),
    new Enemy(4300, 50),
    new Enemy(5700, 350),
];


class Projectiles {
    constructor(positionX, positionY) {
        this.position = {
            x: positionX,
            y: positionY,
        }
        this.size = {
            width: 100,
            height: 10,
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
    }

    draw() {


        ctx.drawImage(ironAttack, this.position.x, this.position.y, this.size.width, this.size.height)
    }

    update() {
        this.position.x += 4.6
    }
}

let ironAttackArr = [];


//SCORES









//Should create background layers for parallax effect --- phase0 copied from class Player --- needs adaptation

class Background {
    constructor() {
        this.position = {
            x: 0,
            y: -20,
        }
        this.size = {
            width: 6467,
            height: 614,
        }

        this.cameraPan = {
            x: 0,
            y: 0,
        }
    }

    draw() {

        ctx.drawImage(baseBackground, this.position.x, this.position.y, this.size.width, this.size.height)

    }

    update() {

        this.position.y += this.cameraPan.y;
        this.position.x += this.cameraPan.x;

        if (player.position.x + player.size.width >= gameCanvas.width / 2) {
            this.cameraPan.x = -10;
        } else if (player.position.x < 50 || this.position.x < 1) {
            this.cameraPan.x = 10;
            // trying to set pan limits
        } else { //if (this.position.x < - 5000 || player.position.x + player.size.width > background.size.width && playerCheck <= gameCanvas.width * 2){
            this.cameraPan.x = 0;

        }
    }
}


const baseBackground = new Image();
baseBackground.src = '/images/background.png';

const ironMan = new Image();
ironMan.src = '/images/ironMan_static.png';

const ironAttack = new Image();
ironAttack.src = '/images/ironAttack.png';

const brain = new Image();
brain.src = '/images/brain_static.png';

const player = new Player();

const enemy = new Enemy();

const background = new Background();




function animate() {
    window.requestAnimationFrame(animate);
    //console.log('GO GO GO')

    ctx.fillStyle = 'white';
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

    // console.log(playerCheck)

    // if(background.position.x < 0){
    //     playerCheck -= .35
    // }else if (background.position.x > 0){
    //     playerCheck += .35
    // }



    //     if (playerCheck  > 0 ){

    background.update();
    background.draw();

    drawScore();

    for (let i = 0; i < randomEnemyArr.length; i++) {
        if (randomEnemyArr[i].position.x < -200) {
            randomEnemyArr[i].position.x = (gameCanvas.width + (Math.random() * 500));
        }

        randomEnemyArr[i].update();
        randomEnemyArr[i].draw();


        ironAttackArr.forEach(projectile => {
            projectile.update();
            projectile.draw();

            //remove enemies
            //Projectile hit enemy


            if (
                projectile.position.x < randomEnemyArr[i].position.x + randomEnemyArr[i].size.width &&
                projectile.position.x + projectile.size.width > randomEnemyArr[i].position.x &&
                projectile.position.y < randomEnemyArr[i].position.y + 70 &&
                projectile.position.y + projectile.size.height > randomEnemyArr[i].position.y
            ) {
                // randomEnemyArr.slice(ironAttackArr[i]);

                randomEnemyArr[i].position.x = 1000
                projectile.position.x = 2000

                console.log(projectile.position.x, projectile.position.y)

                score++
                console.log(score)

                console.log("collision detected")
            }
            console.log("no collision")

            //enemy hits player (gameover)

            if (
                player.position.x < randomEnemyArr[i].position.x + randomEnemyArr[i].size.width &&
                player.position.x + player.size.width > randomEnemyArr[i].position.x &&
                player.position.y + player.size.height > randomEnemyArr[i].position.y &&
                player.position.y < randomEnemyArr[i].position.y + 70
            ) {
                console.log("GAMEOVER")
                lose();

            } else if (score >= 21) {
                console.log("WIN")
                win();
            }

            //projectile leaves canvas
            //move to count only first enemy 
            
            if (projectile.position.x > 1024) {
                projectile.position.x = 6000

            }


        })

    }



    player.update();
    player.draw();




}



animate();



// Keyboard controls - player movement

// Player should stop moving left at 50px from limit and move background right
// player should stop center screem and background move left

// some code should run based on "if key pressed" and or "if click" event // How to do this?

addEventListener('keydown', ({ keyCode }) => {
    // console.log(keyCode);
    switch (keyCode) {
        case 79:
            // console.log('left'); // O
            if (player.position.x > 100) {
                player.velocity.x -= .35;
            } else {
                player.velocity.x = 0;
                background.cameraPan.x = 0;
            }
            break

        case 80:
            // console.log('right');  // P
            if (player.position.x + player.size.width <= gameCanvas.width / 2 &&
                player.position.x + player.size.width > 100) {
                player.velocity.x += .35;
            } else {
                player.velocity.x = 0;
            }
            break


        case 81:
            // console.log('up'); // Q
            if (player.position.x + player.size.width <= gameCanvas.width / 2 && player.position.x > 100) {
                player.velocity.y = - 20;
            } else {
                player.velocity.y = - 20;
                player.velocity.x = 0;
                background.cameraPan.x = 0;

            }
            break

        case 65:
            // console.log('down'); // A
            if (player.position.x + player.size.width <= gameCanvas.width / 2 && player.position.x > 100) {
                player.velocity.y = + 20;
            } else {
                player.velocity.y = + 20;
                player.velocity.x = 0;
            }
            break

        case 32:
            // console.log('attack'); // Space-Bar

            ironAttackArr.push(new Projectiles(player.position.x + 50, player.position.y + 100));
            break

        case 90:
            // console.log('defense'); // Z
            break
    }

});

addEventListener('keyup', ({ keyCode }) => {
    // console.log(keyCode);
    switch (keyCode) {
        case 79:
            // console.log('left'); // O
            player.velocity.x = 0;
            break

        case 80:
            // console.log('right');  // P
            player.velocity.x = 0;
            break

        case 81:
            // console.log('up'); // Q
            player.velocity.y = 0;
            break

        case 65:
            // console.log('down'); // A
            player.velocity.y = 0;
            break

        case 32:
            // console.log('attack'); // Space-Bar
            break

        case 90:
            // console.log('defense'); // Z
            break
    }

});



