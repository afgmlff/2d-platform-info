export class Player{
    constructor(game){
        this.game = game;

        this.width = 128;
        this.height = 128;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.image = document.getElementById('player');
        this.frameX = 0;
        this.frameY = 6;
        this.speed = 0;
        this.maxSpeed = 5;
    }

    update(input){
        this.x += this.speed;
        if(input.includes('ArrowRight')) this.speed = this.maxSpeed;
        else if(input.includes('ArrowLeft')) this.speed = -this.maxSpeed;
        else this.speed = 0;
        
        if(this.speed > 0 && this.frameX < 4){
            this.frameY = 6;
            this.frameX++;
        }

        else if(this.speed > 0 && this.frameX == 4){
            this.frameY = 6;
            this.frameX = 0;
        }

        else if (this.speed < 0 && this.frameX < 4){
            this.frameY = 7;
            this.frameX++;
        }

        else if (this.speed < 0 && this.frameX == 4){
            this.frameY = 7;
            this.frameX = 0;
        }

        //boundaries
        if(this.x < 0){
            this.x = 0;
        }
        if(this.x > this.game.width - this.width){
            this.x = this.game.width - this.width;
        }
    }

    draw(context){ //768 
        context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height) // alterar depois pra sheet do character 8bit
    }
}