//Weather Wear

const clothesToWear = suggestClothes(18);
console.log(clothesToWear); 

console.log(suggestClothes(10));
console.log(suggestClothes(5));
console.log(suggestClothes(-5));



function suggestClothes(temp) {

    if(temp >= 18) {
     return 'Wear shorts and t-shirt';
    } else if (temp >=10 && temp < 18) {
    return 'Wear Pant and Sweatshirt';
    } else  if(temp < 10 && temp >= 5){
        return 'Wear Jacket';
    } else {
        return 'Wear Snow Suit';
    }


}