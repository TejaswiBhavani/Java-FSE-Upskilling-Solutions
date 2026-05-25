function Event(name, seats) {
    this.name = name;
    this.seats = seats;
}
Event.prototype.checkAvailability = function() {
    return this.seats > 0;
};
const e1 = new Event("Code Camp", 10);
console.log(e1.name + " available? " + e1.checkAvailability());

// Object.entries
for (let [key, value] of Object.entries(e1)) {
    console.log(key + ": " + value);
}
