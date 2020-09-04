/* The roller() function performs the actual die rolls
@param x, the number of die sides
@return dice, a randomized number,
*/
function roller(x){
    dice = Math.floor(Math.random() * x) + 1;
    
    // switch statement to determine possible sides.
    switch(x) {
        case x = 4:
            document.querySelector('#dice4').textContent = dice;
        break;
        case x = 6:
            document.querySelector('#dice6').textContent = dice;
        break;
        case x = 8:
            document.querySelector('#dice8').textContent = dice;
        break;
        case x = 10:
            document.querySelector('#dice10').textContent = dice;
        break;
        case x = 12:
            document.querySelector('#dice12').textContent = dice;
        break;
        case x = 20:
            document.querySelector('#dice20').textContent = dice;
        break;
    }
}

/* The rolAll() function iterates through all
possible die-sides and passes them back to the
roller() function.
*/
function rollAll(){
    
    for (var i = 4; i <= 20; i+=2){
        roller(i);
    }
}

function refresh(){
    location.reload();
}
