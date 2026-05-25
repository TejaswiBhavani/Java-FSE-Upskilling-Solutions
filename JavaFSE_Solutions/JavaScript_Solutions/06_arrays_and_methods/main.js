const events = [];
events.push({ name: 'Rock Concert', cat: 'music' });
events.push({ name: 'Baking 101', cat: 'workshop' });
events.push({ name: 'Jazz Night', cat: 'music' });

const musicEvents = events.filter(e => e.cat === 'music');
const formatted = musicEvents.map(e => [MUSIC]  + e.name);

console.log("Filtered & Mapped: ", formatted);
