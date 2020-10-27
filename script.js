
// Define what our die buttons do.
$("#die-table").on("click", ".btn", function(){
    var die = $(this).attr("value");
    roller(die); 
});
// Define what our refresh button does.
$("#refresh").on("click", refresh)

// Define what our roll all button does.
$("#roll-all").on("click", rollAll);


/* The roller() function performs the actual die rolls
@param x, the number of die sides
@return dice, a randomized number,
*/
function roller(x){
    result = Math.floor(Math.random() * x) + 1;
    
    $("#dice"+x).text(result)
    
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

/*
    refresh() simply refreshes the page.
*/
function refresh(){
    location.reload();
}
