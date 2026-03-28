//  function canBorrowBook(mambarAge, hasValidCard, overdueBooks){
//     if (mambarAge < 6 ) return alert("Too young- must be at least 6 year old"),false;
//     if (!hasValidCard)  return alert("Invalid library card- please renew at the front desk"),false;
//     if (overdueBooks > 0) return alert("please renew your x overdue book(s) first"),  false;
//     else return alert("You may borrow up to 3 books") ,  true;
// }
// console.log(canBorrowBook(4, false, 1));

function getWeatherAdvice(temperature, isRaining){
    if (temperature >= 35) return "too hot for hiking - stay indoors and hydrate";
    else if (temperature >= 25 & !isRaining) return "Great weather for hiking - don't forget sunscreen";
    else if (temperature >= 25 & isRaining) return "Warm but rainy - consider indoor activites ";
    else if (temperature >= 15 & !isRaining) return"Perfect hiking weather - enjoy the trails";
    else if (temperature >= 15 & isRaining) return "Cool and rainy - bring waterproof gear if hiking";
    else if (temperature >= 5 & !isRaining) return  "Chilly - wear layers for your hike";
    else if (temperature >= 5 & isRaining) return "Cold and wet - best to stay indoors";
    else return "Too cold - stay warm indoors";
}
console.log(getWeatherAdvice(100, false));
console.log(getWeatherAdvice(10, true));