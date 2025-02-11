const boughtCandyPrices = [];
addCandy("Sweet", 20); //Adds the price of 20 grams of sweets to the array boughtCandyPrices
addCandy("Chocolate", 10);// Adds the price of 10 grams of chocolate to the array boughtCandyPrices

console.log(boughtCandyPrices);

const amountToSpend  = Math.random()*100;

if(canBuyMoreCandy()) {
    console.log("You can buy more, so please do!");
    addCandy("Toffee", 20);
} else {
    console.log("Enough candy for you!");
}

console.log(boughtCandyPrices);


/*Candy type Price per gram
Sweet	0.5
Chocolate0.7
Toffee	1.1
Chewing-gum	0.03
*/
function addCandy(candyType, weight){
    switch(candyType) {

        case "Sweet" : {
            boughtCandyPrices.push(0.5*weight);
            break;
        }
        case "Chocolate" : {
            boughtCandyPrices.push(0.7*weight); 
            break;
        }
        case "Toffee" : {
            boughtCandyPrices.push(1.1*weight); 
            break;
        }
        case "Chewing-gum" : {
            boughtCandyPrices.push(0.03*weight);
            break;
        }
         default : {

        }


    }

}

/**
 * canBuyMorecandy
 * @returns boolean value
 */
function canBuyMoreCandy() {
    let totalPrice = 0;
    for (const price of boughtCandyPrices) {
        totalPrice += price;
    }
   
    const balance = amountToSpend - totalPrice;
    if( balance > 0 ) {
        return true;
    } else return false;

}