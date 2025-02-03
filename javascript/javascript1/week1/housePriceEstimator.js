
let estimatedHousePrice= 0;

const peterHouseCost = 2500000;
const juliaHouseCost = 1000000;

//Peter's house
estimatedHousePrice = housePriceEstimator(8,10,10,100);
console.log("Peter: "+estimatedHousePrice);

let result = `${peterHouseCost >estimatedHousePrice ? "House cost is greater than estimated price calculated" : "House cost is less than estimated price calculated"}`;

console.log("Peter's " + result);

//Julia's house
estimatedHousePrice = housePriceEstimator(5,8,11,70);

console.log("Julia's " +estimatedHousePrice);

result = `${juliaHouseCost >estimatedHousePrice ? "House cost is greater than estimated price calculated" : "House cost is less than estimated price calculated"}`;

console.log("Julia's " + result);


/*
**House Price Estimator function
**with input as house's width(m), height(m),depth(m) &
**garden size(m2)
*/
function housePriceEstimator(w, h, d,grdnSz) {
   
    let width = w;
    let height= h;
    let depth= d;
    let gardenSizeInM2 = grdnSz;
    let volumeInMeters =width*height*depth;
    let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

    return housePrice;

}