const car = {
    brand: "Toyota",
    getBrand: function() {
        return this.brand;
    }
};
const bike = { brand: "Honda" };
console.log(car.getBrand.call(bike)); // ?
