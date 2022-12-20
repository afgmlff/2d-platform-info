import { Player } from './player.js';
import { InputHandler } from './input.js';

window.addEventListener('load', function(){
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = 700;



    class Story{
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.input = new InputHandler();
        }

        update(){
            this.player.update();
        }

        draw(context){
            this.player.draw(context);
        }
    }

    const story = new Story(canvas.width, canvas.height);
    console.log(story);

    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        story.update()
        story.draw(ctx);
        requestAnimationFrame(animate);
    }

    animate();

});





