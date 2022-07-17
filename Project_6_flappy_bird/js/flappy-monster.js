

// Three Scenarios - states:
// Initial Screen
// Game Playing Screen
// Game Over Screen

// Define game state as int variable:
const INITIAL = 1;
const GAME_PLAYING = 2;
const GAME_OVER = 3;


function FlappyMonster(canvas) {
    // Base
    let game = this;

    // Global Atrributes
    game.canvas = canvas;
    game.context = game.canvas.getContext('2d');

    // Game State
    game.currentState = INITIAL;

    // Game Speed
    game.velocity = 5;

    // Bind Events
    game.bindEvents();

    // Create Game Objects
    game.createObjects();
};

FlappyMonster.prototype.createObjects =function(){
    // Base
    let game = this;

    // Backgrund
    game.background1 = new GameBackground('img/back.png', game.canvas);
    game.background2 = new GameBackground('img/back.png', game.canvas); // Instead of writing a complicated background cutout logic, just chain a full width background image twice and loop it.
    game.background2.x = game.canvas.width;

    // Score
    game.gameScore = new GameScore(game.canvas);
    game.gameScore.x = game.canvas.width - 150;
    game.gameScore.y = 50;

    // Wall Factory
    game.wallFactory = new WallFactory(game.canvas);

    // Monster
    game.monster = new Monster('img/monster.png', game.canvas);
};

FlappyMonster.prototype.bindEvents = function() {
    // Base
    let game = this;

    game.canvas.addEventListener('click', (e) => {
        switch (game.currentState) {
            case INITIAL:
                game.currentState = GAME_PLAYING;
                game.wallFactory.generateWalls();
                break;
            case GAME_PLAYING:
                game.monster.vy = -1 * game.velocity;
                break;
        };
    });
    
    // Key Listener
    window.addEventListener('keydown', (e) => {
        switch (game.currentState) {
            case GAME_OVER:
                if(e.key === "r") {
                    game.reset();
                    game.currentState = GAME_PLAYING;
                }
                break;
        };
    });
};

FlappyMonster.prototype.reset = function() {
    // Base
    let game = this;

    // Reset States
    game.gameScore.start = new Date();
    game.gameScore.score = 0;
    game.wallFactory.walls = [];
    game.monster.x = 115;
    game.monster.y = 115;
};

FlappyMonster.prototype.start = function() {
    // Base
    let game = this;

    // Start Game
    window.requestAnimationFrame(function() {
        game.runGameLoop();
    });

};


FlappyMonster.prototype.runGameLoop = function() {
    // Base
    let game = this;

    // Game State
    switch(game.currentState) {
        case INITIAL:
            // Draw INITIAl SCREEN
            game.drawInitialScreen()
            break
        case GAME_PLAYING:
            // Draw GAME PLAYING SCREEN
            game.drawGamePlayingScreen()
            break
        case GAME_OVER:
            // Draw GAME OVER SCREEN
            game.drawGameOverScreen()
            break
    }

    // Start Game
    window.requestAnimationFrame(function() {
        game.runGameLoop();
    });
    
};

FlappyMonster.prototype.drawInitialScreen   = function(){
        // Base
        let game = this;

        // Draw

        // Background
        game.context.fillStyle = 'black';
        game.context.fillRect(0, 0 , game.canvas.width, game.canvas.height);

        // Text
        game.context.fillStyle = 'white';
        game.context.font = '36px Arial'
        game.context.fillText('CLICK TO START', game.canvas.width / 2 - 100, game.canvas.height / 2);
        

};

// Note: Main game logic - keep as clean as possible
FlappyMonster.prototype.drawGamePlayingScreen = function(){
    // Base
    let game = this;
    
    // Clear Canvas
    game.context.clearRect(0, 0, game.canvasWidth, game.canvasHeight);

    // Draw Background
    game.animateBackground();

    // Draw Score
    game.gameScore.draw()

    // Draw Walls
    game.drawWalls();

    // Draw Monster
    game.monster.draw()

    // Collision Check
    game.checkCollisions();
};

FlappyMonster.prototype.checkCollisions = function() {
    // Base
    let game = this;

    let walls = game.wallFactory.walls;

    for (let i = 0; i < walls.length; i++){
        if(game.isCollided(game.monster, walls[i])){
            game.currentState = GAME_OVER;
        }
    }
};

FlappyMonster.prototype.isCollided = function(monster, wall) {
    // Base
    let game = this;

    let isCollided = true;

    // Monster Coordinates
    let monsterTop = game.monster.y;
    let monsterBottom = game.monster.y + game.monster.h;
    let monsterRight = game.monster.x + game.monster.w;
    let monsterLeft = game.monster.x;

    // Wall Coordinates
     let wallTop = wall.y + wall.h + wall.gap; // top of lower wall
     let wallBottom = wall.y + wall.h // bottom of upper wall
     let wallRight = wall.x + wall.w;
     let wallLeft = wall.x;


     if((monsterBottom < wallTop && monsterTop > wallBottom)
        || (monsterLeft > wallRight)    
        || (monsterRight < wallLeft)){
        isCollided = false;
     }

     return isCollided;
};

FlappyMonster.prototype.drawWalls = function() {
    // Base
    let game = this;

    // Draw Walls
    let walls = game.wallFactory.walls;
    
    for(let i = 0; i < walls.length; i++) {
        walls[i].draw();
        walls[i].x -= game.velocity;
    };

    game.removeExtraWalls();
};

// Removing walls from array to reduce complexity/weight
FlappyMonster.prototype.removeExtraWalls = function() {
    // Base
    let game = this;

    // Draw Walls
    let walls = game.wallFactory.walls;
    
    for(let i = 0; i < walls.length; i++) {
        if(walls[i].x + walls[i].w < 0){
            // remove
            walls.shift();
        }
    };
};
    
FlappyMonster.prototype.animateBackground = function(){
    // Base
    let game = this;

    // Draw BG1
    game.background1.draw();
    
    if(Math.abs(game.background1.x) > game.canvas.width){
        game.background1.x = game.canvas.width - game.velocity; 
    };
    game.background1.x -= game.velocity;
    
    // Draw BG2
    game.background2.draw();

    if(Math.abs(game.background2.x) > game.canvas.width){
        game.background2.x = game.canvas.width - game.velocity; 
    };
    game.background2.x -= game.velocity;
};

FlappyMonster.prototype.drawGameOverScreen = function(){
        // Base
        let game = this;

        // Draw

        // Background
        game.context.fillStyle = 'black';
        game.context.fillRect(0, 0 , game.canvas.width, game.canvas.height);

        // Text
        game.context.fillStyle = 'white';

        game.context.font = '54px Arial'
        game.context.fillText('Your Score: ' + game.gameScore.score, game.canvas.width / 2 - 160, game.canvas.height / 2 - 100);
        
        game.context.font = '36px Arial'
        game.context.fillText('GAME OVER :(', game.canvas.width / 2 - 100, game.canvas.height / 2);
        
        game.context.font = '24px Arial'
        game.context.fillText('Press R to Restart', game.canvas.width / 2 - 70, game.canvas.height / 2 + 50);

};
