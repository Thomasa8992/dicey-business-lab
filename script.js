
var random,
dieArray = [], 
genDie = document.querySelector('#Gen-die'),
rollDice = document.querySelector('#roll-dice'),
sum = document.querySelector('#sum');
document.addEventListener('DOMContentLoaded', function(){
    var Die = function() {
        var randomNumber = Math.floor((Math.random()*6)+1);
        this.value = randomNumber;
        this.dieDiv = document.createElement('div');
        this.dieDiv.className = 'die-div';
        document.body.appendChild(this.dieDiv); 
        this.dieDiv.innerText = randomNumber;

        
    }
    Die.prototype.roll = function() {
            this.value = Math.floor((Math.random()*6)+1); 
            this.dieDiv.innerText = this.value;
    }  
    genDie.addEventListener('click', function(){
        var die = new Die();
        dieArray.push(die);
        console.log(dieArray);
    });
    rollDice.addEventListener('click', function(){
        for(var i = 0; i < dieArray.length; i++){
            dieArray[i].roll();
        }
     });
    Die.prototype.add = function() {
        this.value = Math.floor((Math.random()*6)+1); 
        this.dieDiv.innerText = this.value;
    }  
    sum.addEventListener('click', function(){
        for(var i = 0; i < dieArray.length; i++){
            dieArray[i].roll();
        }
    });
   
    
});