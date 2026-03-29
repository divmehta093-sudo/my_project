 function canBorrowBook(memberAge, hasValidCard, overdueBooks){
    if (memberAge < 6 || !hasValidCard || overdueBooks > 0){
    if (memberAge < 6 ) return {
            allowed: false,
            message: "Too young - must be atleast 6 year old"
        };
    if (!hasValidCard)  return{
            allowed: false,
            message: "Invalid library card - please renew at the front desk"
        };;
    if (overdueBooks > 0) return {
            allowed: false,
            message: `Please return your ${overdueBooks} overdue book(s) first`
        }
    };
   return {
        allowed: true,
        message: "You may borrow up to 3 books"
    };}
console.log(canBorrowBook(4, true, 5));



// function getWeatherAdvice(temperature, isRaining){
//     if (temperature >= 35) return "too hot for hiking - stay indoors and hydrate";
//     else if (temperature >= 25 & !isRaining) return "Great weather for hiking - don't forget sunscreen";
//     else if (temperature >= 25 & isRaining) return "Warm but rainy - consider indoor activites ";
//     else if (temperature >= 15 & !isRaining) return"Perfect hiking weather - enjoy the trails";
//     else if (temperature >= 15 & isRaining) return "Cool and rainy - bring waterproof gear if hiking";
//     else if (temperature >= 5 & !isRaining) return  "Chilly - wear layers for your hike";
//     else if (temperature >= 5 & isRaining) return "Cold and wet - best to stay indoors";
//     else return "Too cold - stay warm indoors";
// }
// console.log(getWeatherAdvice(100, false));
// console.log(getWeatherAdvice(10, true));



// function calculateGrade(score, hasExtraCredit) {
//   if (score < 0 || score > 100) {
//     return "INVALID";
//   }
//   if (hasExtraCredit) {
//     score += 5;
//     if (score > 100) {
//       score = 100;
//     }
//   }
//   if (score >= 90) return "A";
//   if (score >= 80) return "B";
//   if (score >= 70) return "C";
//   if (score >= 60) return "D";
//   return "F";
// }

// console.log(calculateGrade(89, true)); 