function addEvent(name) { console.log('Event added: ' + name); }

// Closure to track total registrations for a category
function createCategoryTracker(category) {
    let count = 0;
    return function registerUser() {
        count++;
        console.log('Registered for ' + category + '. Total: ' + count);
    };
}
const registerArt = createCategoryTracker('Art');
registerArt();
registerArt();

function filterEventsByCategory(events, callback) {
    return events.filter(callback);
}
const myEvents = [{c:'Art'}, {c:'Tech'}];
console.log(filterEventsByCategory(myEvents, e => e.c === 'Art'));
