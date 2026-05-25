const setupEvent = (name = 'Unknown', location = 'TBA') => {
    let baseData = { name, location, type: 'public' };
    
    // Destructuring
    const { name: eName, location: eLoc } = baseData;
    console.log('Setup:', eName, eLoc);
    
    return baseData;
};

const ev1 = setupEvent('Park Clean');
const ev2 = setupEvent('Tech Talk', 'Library');

const list = [ev1, ev2];
// Spread operator to clone before filtering
const clonedList = [...list];
const publicEvents = clonedList.filter(e => e.type === 'public');
console.log('Public:', publicEvents);
