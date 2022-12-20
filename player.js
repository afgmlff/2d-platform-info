export class Player{
    constructor(game){
        this.game = game;

        this.width = 128;
        this.height = 128;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.image = document.getElementById('player')
    }

    update(){
        
    }

    draw(context){ //768 
        context.drawImage(this.image, 0, 768, this.width, this.height, this.x, this.y, this.width, this.height) // alterar depois pra sheet do character 8bit
    }
}