function Car (model, year, miles){
    this.model = model;
    this.year = year;
    this.miles = miles;
    // this.toString = function () {
    //     return `The car ${this.model} is made in ${this.year} and ran ${this.miles} miles`;
    // }
}
Car.prototype.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };

let hundai = new Car("Hundai", "2015", "20000");
let ford = new Car("Ford", "2013", "35000");

console.log(hundai.toString());
console.log(ford.toString());
 