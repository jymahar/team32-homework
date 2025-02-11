//Weather Wear

const clothesToWear = suggestClothes(18);
console.log(clothesToWear); 

console.log(suggestClothes(12));
console.log(suggestClothes(0));
console.log(suggestClothes(-5));



function suggestClothes(temp) {

    if(temp >= 18) {
     return 'Wear shorts and t-shirt';
    } else if (temp < 18 && temp > 10) {
    return 'Wear Pant and Sweatshirt';
    } else  if(temp <5 && temp > 1){
        return 'Wear Jacket';
    } else {
        return 'Wear Snow Suit';
    }


}