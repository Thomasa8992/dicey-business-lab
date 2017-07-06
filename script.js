var random, 
dieDiv,
dieArray = [1,2,3,4,5,6],
genDie = document.querySelector('#Gen-die'),
rollDice = document.querySelector('#roll-dice'),
sum = document.querySelector('#sum');

document.addEventListener('DOMContentLoaded', function(){
    function Die(){
        this.value = value;
        console.log(value);
        random =  dieArray[Math.floor(Math.random() * dieArray.length)];
        var dieDiv = document.createElement('div');
        dieDiv.className = 'die-div';
        document.body.appendChild(dieDiv);
        dieDiv.innerText= random;
        rollDice.addEventListener(function(){
            console.log(random);
        });
    }
    
    
    genDie.addEventListener('click', function(){
        var die = new Die();
        die;
    });
    Die.prototype.roll = function(){
    }

    
});
