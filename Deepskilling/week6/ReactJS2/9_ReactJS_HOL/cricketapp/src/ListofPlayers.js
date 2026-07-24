import React from 'react';

export function ListofPlayers({ players }) {
    return (
        <ul>
            {players.map((p, index) => (
                <li key={index}>{p.name} {p.score}</li>
            ))}
        </ul>
    );
}

export function Scorebelow70({ players }) {
    // Filter the players with scores below 70 using arrow functions of ES6
    const filteredPlayers = players.filter(p => p.score < 70);
    return (
        <ul>
            {filteredPlayers.map((p, index) => (
                <li key={index}>{p.name} {p.score}</li>
            ))}
        </ul>
    );
}
