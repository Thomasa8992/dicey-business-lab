
var random,
dieArray = [], 
genDie = document.querySelector('#gen-die'),
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
        this.dieDiv.addEventListener('dblclick', this.removeDiv.bind(this));   
        this.dieDiv.addEventListener('click', this.roll.bind(this));
        sum.addEventListener('click', this.sum) 
    }
    Die.prototype.roll = function() {
        this.value = Math.floor((Math.random()*6)+1); 
        this.dieDiv.innerText = this.value;
    }  
    Die.prototype.removeDiv = function() {
        this.dieDiv.remove();
        dieArray.pop();
        console.log(dieArray);
    }  


    genDie.addEventListener('click', function(){
        var die = new Die();
        dieArray.push(die);
        console.log(dieArray);

    });
    rollDice.addEventListener('click', function(){
        for(var i = 0; i < dieArray.length; i++){
            dieArray[i].roll();
            dieArray.values()   
        }
     });
    sum.addEventListener('click', function(){
        var myTotal = 0;  // Variable to hold your total

        for(var i = 0; i < dieArray.length; i++) {
            console.log( myTotal += dieArray[i]);
}

    });
   
    
});