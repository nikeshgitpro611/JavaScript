let flightDetails = {
  company: "Cargo Jet",
  gate: 23,
  bookings: [],
  checkIn: function (flightNum, name) {
    console.log(`${name} checked in to ${this.company} ${flightNum}`);
    this.gate = this.gate === undefined ? 1 : this.gate + 1;
    this.bookings.push({
      flight: `${this.company} ${flightNum}`,
      name: name,
      Gate: this.gate,
    });
  },
};
const secondFlight = {
  company: "airline",
  bookings: [],
};
const book = flightDetails.checkIn;
const binAll = book.bind(secondFlight); //bind assign in a new function keyword
let flightData = [23, "mohamed"]; //rapping by array
book.apply(secondFlight, flightData);
binAll(24, "ali");

book.call(secondFlight, 9, "smith");
console.log(secondFlight); // { company: 'airline', bookings: [ { flight: 'airline 24', name: 'ali', Gate: 2 } ] }
