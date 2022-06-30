

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

    // Bind Events
    game.bindEvents();

    // Create Game Objects
    game.createObjects();
};

FlappyMonster.prototype.createObjects =function(){
    // Base
    let game = this;
}

FlappyMonster.prototype.bindEvents = function() {
    // Base
    let game = this;

    game.canvas.addEventListener('click', (e) => {
        switch (game.currentState) {
            case INITIAL:
                game.currentState = GAME_PLAYING;
                break;
            case GAME_PLAYING:
                break;
        };
    });
    
    // Key Listener
    window.addEventListener('keydown', (e) => {
        switch (game.currentState) {
            case GAME_OVER:
                if(e.key === "r") {
                    game.currentState = GAME_PLAYING;
                }
                break;
        };
    });
}

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

FlappyMonster.prototype.drawGamePlayingScreen = function(){
        // Base
        let game = this;
        
        // Draw

        // Background
        game.context.fillStyle = 'black';
        game.context.fillRect(0, 0 , game.canvas.width, game.canvas.height);

        // Text
        game.context.fillStyle = 'white';
        game.context.font = '36px Arial'
        game.context.fillText('GAME PLAYING', game.canvas.width / 2 - 100, game.canvas.height / 2);
        

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
        game.context.font = '36px Arial'
        game.context.fillText('GAME OVER :(', game.canvas.width / 2 - 100, game.canvas.height / 2);
        
        game.context.font = '24px Arial'
        game.context.fillText('Press R to Restart', game.canvas.width / 2 - 70, game.canvas.height / 2 + 50);

};
