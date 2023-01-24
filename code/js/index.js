

const gameCanvas = document.querySelector('canvas')
const ctx = gameCanvas.getContext('2d')

gameCanvas.width = 64*16; //1024;
gameCanvas.height = 64*9; //576;

// canvas - Game Area
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);


//Player - needs
//position (object with x and y) +
//size (object with width and height) +
//velocity/speed (object with x and y)

// + gravity

//check how to turn on and off gravity
// after liftoff player should be controled with up and down... with boosters off = gravity!!

const gravity = .25;
//const speed = 0.15;  -- fail

const bgLayer0 = new Image();
bgLayer0.src = '/images/background_00.jpg';

const ironMan = new Image();
ironMan.src = '/images/ironMan_static.png';




// Players 
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100,
        }
        this.size = {
            width: 150,
            height: 200,
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
    }

    draw() {

        ctx.drawImage(ironMan,this.position.x, this.position.y, this.size.width, this.size.height)
    }

    update() {

        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        // Basic Gravity Simulation  by Chris Courses
        if (this.position.y < gameCanvas.height - this.size.height) { //should be reviewed as it's no the same as Chris
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
        }
    }
}

//Should create background layers for parallax effect --- phase0 copied from class Player --- needs adaptation

class Backgrounds {
    constructor(image) {
        this.image = image,

        this.position = {
            x: 100,
            y: 100,
        }
        this.size = {
            width: 100,
            height: 200,
        }
        this.cameraPan = {
            x: 0,
            y: 0,
        }
    }

    draw() {

       
    }

    update() {

        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

    }
}



const player = new Player();

function animate() {
    window.requestAnimationFrame(animate);
    //console.log('GO GO GO')


    ctx.fillStyle = 'white';
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);

    ctx.drawImage (bgLayer0, 0, 0, bgLayer0.width, bgLayer0.height)

    player.update();
    player.draw();
}

animate();


// Keyboard controls - player movement

// Player should stop moving left at 50px from limit and move background right
// player should stop center screem and background move left


addEventListener('keydown', ({ keyCode }) => {
    console.log(keyCode);
    switch (keyCode) {
        case 79:
            console.log('left'); // O
            if(player.position.x > 100) {
            player.velocity.x -= .35;
        } else {
            player.velocity.x = 0;
        }
            break

        case 80:
            console.log('right');  // P
            if(player.position.x + player.size.width <= gameCanvas.width /2 ) {
            player.velocity.x += .35;
            } else {
                player.velocity.x = 0;
            }
            break


        case 81:
            console.log('up'); // Q
            if(player.position.x + player.size.width <= gameCanvas.width /2 && player.position.x > 100) {
            player.velocity.y = - 20;
        } else {
            player.velocity.y = - 20;
            player.velocity.x = 0;
        }
            break

        case 65:
            console.log('down'); // A
            if(player.position.x + player.size.width <= gameCanvas.width /2 && player.position.x > 100) {
                player.velocity.y = + 20;
            } else {
                player.velocity.y = + 20;
                player.velocity.x = 0;
            }
            break

        case 32:
            console.log('attack'); // Space-Bar
            break

        case 90:
            console.log('defense'); // Z
            break
    }

});

addEventListener('keyup', ({ keyCode }) => {
    console.log(keyCode);
    switch (keyCode) {
        case 79:
            console.log('left'); // O
            player.velocity.x = 0;
            break

        case 80:
            console.log('right');  // P
            player.velocity.x = 0;
            break

        case 81:
            console.log('up'); // Q
            player.velocity.y = 0;
            break

        case 65:
            console.log('down'); // A
            player.velocity.y = 0;
            break

        case 32:
            console.log('attack'); // Space-Bar
            break

        case 90:
            console.log('defense'); // Z
            break
    }

});