const flight = {
    company: "Lufthansa",
    number: "LH123",
    airbus: 333,
    plane: "A320",
    gate: "23B",
    bookings: [],
    checkIn: function(flightNum, name){
       console.log(`${name} checked in to ${this.company} ${flightNum}`) 
       flight.bookings.push({flight: `${this.company} ${flightNum}`, name: name,Gate: this.gate});
    }
}
flight.checkIn(23, 'mohamed');
flight.checkIn(24, 'ali');
flight.checkIn(25, 'sara');
flight.bookings.forEach((booking) => console.log(booking));

const secondFlight = {
    company: "Lufthansa",
    number: "Lh321",
    bookings: [],

}
//Assigning but this will not work
const book = flight.checkIn;
// book(89,'mohamed');  //Error typoError  
book.call(secondFlight, 89,'john');
book.call(secondFlight, 9,'smith');
console.log(secondFlight.bookings);

const flight1 = { name: "Lufthansa", code: "LH123" };
const flight2 = { name: "Qatar Airways", code: "QR456" };

function checkIn(passengerName) {
    console.log(`${passengerName} checked in to flight ${this.name} (${this.code}).`);
}

// Arguments passed as an array
checkIn.apply(flight1, ["Mohamed"]);
// Output: Mohamed checked in to flight Lufthansa (LH123).

checkIn.apply(flight2, ["Ali"]);
// Output: Ali checked in to flight Qatar Airways (QR456).
