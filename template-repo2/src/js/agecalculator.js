export default class AgeCalculator {
  constructor(age) {
    this.age = age;
  }

//   // Returns the age of the person in Mercury years
//   get mercuryAge() {
//     return this.age / 0.24;
//   }

//   // Returns the age of the person in Venus years
//   get venusAge() {
//     return this.age / 0.62;
//   }

//   // Returns the age of the person in Mars years
//   get marsAge() {
//     return this.age / 1.88;
//   }

//   // Returns the age of the person in Jupiter years
//   get jupiterAge() {
//     return this.age / 11.86;
//   }

//   // Calculates the number of years that have passed on each planet since a past birthday
//   yearsSince(birthday, planet) {
//     const earthYearsSince = this.age - birthday;
//     switch (planet) {
//       case "mercury":
//         return earthYearsSince / 0.24;
//       case "venus":
//         return earthYearsSince / 0.62;
//       case "mars":
//         return earthYearsSince / 1.88;
//       case "jupiter":
//         return earthYearsSince / 11.86;
//       default:
//         return 0;
//     }
//   }

//   // Calculates the number of years that have yet to pass until a future birthday on a planet
//   yearsUntil(birthday, planet) {
//     const earthYearsUntil = birthday - this.age;
//     switch (planet) {
//       case "mercury":
//         return earthYearsUntil / 0.24;
//       case "venus":
//         return earthYearsUntil / 0.62;
//       case "mars":
//         return earthYearsUntil / 1.88;
//       case "jupiter":
//         return earthYearsUntil / 11.86;
//       default:
//         return 0;
//     }
//   }
// }






// export default class Triangle {
//   constructor(side1, side2, side3) {
//     this.side1 = side1;
//     this.side2 = side2;
//     this.side3 = side3;
//   }

//   checkType() {
//     if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
//       return "not a triangle";
//     } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
//       return "scalene triangle";
//     }  else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
//       return "equilateral triangle";
//     } else {
//       return "isosceles triangle";
//     }
//   }    
// }