import React from 'react';

// Display the Odd Team Player using the Destructuring features of ES6
export function OddPlayers(IndianTeam) {
    const [first, , third, , fifth] = IndianTeam;
    return (
        <ul>
            <li>First : {first}</li>
            <li>Third : {third}</li>
            <li>Fifth : {fifth}</li>
        </ul>
    );
}

// Display the Even Team players using the Destructuring features of ES6
export function EvenPlayers(IndianTeam) {
    const [, second, , fourth, , sixth] = IndianTeam;
    return (
        <ul>
            <li>Second : {second}</li>
            <li>Fourth : {fourth}</li>
            <li>Sixth : {sixth}</li>
        </ul>
    );
}

// Display merged arrays
export function ListofIndianPlayers({ IndianPlayers }) {
    return (
        <ul>
            {IndianPlayers.map((player, index) => (
                <li key={index}>Mr. {player}</li>
            ))}
        </ul>
    );
}
