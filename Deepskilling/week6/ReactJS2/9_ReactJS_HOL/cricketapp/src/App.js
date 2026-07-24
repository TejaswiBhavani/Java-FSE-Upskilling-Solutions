import React from 'react';
import { ListofPlayers, Scorebelow70 } from './ListofPlayers';
import { OddPlayers, EvenPlayers, ListofIndianPlayers } from './IndianPlayers';

// 1. Declare an array with 11 players and store details of their names and scores
const players = [
    { name: 'Mr. Jack', score: 50 },
    { name: 'Mr. Michael', score: 70 },
    { name: 'Mr. John', score: 40 },
    { name: 'Mr. Ann', score: 61 },
    { name: 'Mr. Elisabeth', score: 61 },
    { name: 'Mr. Sachin', score: 95 },
    { name: 'Mr. Dhoni', score: 100 },
    { name: 'Mr. Virat', score: 84 },
    { name: 'Mr. Jadeja', score: 64 },
    { name: 'Mr. Raina', score: 75 },
    { name: 'Mr. Rohit', score: 80 }
];

// 2.a Arrays for destructuring
const IndianTeam = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvaraj5', 'Raina6'];

// 2.b Declare two arrays T20players and RanjiTrophy players and merge them
const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

function App() {
    var flag = true;

    if (flag === true) {
        return (
            <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
                <h1>List of Players</h1>
                <ListofPlayers players={players} />
                <hr />
                <h1>List of Players having Scores Less than 70</h1>
                <Scorebelow70 players={players} />
            </div>
        );
    } else {
        return (
            <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
                <div>
                    <h1>Indian Team</h1>
                    <h1>Odd Players</h1>
                    {OddPlayers(IndianTeam)}
                    <hr />
                    <h1>Even Players</h1>
                    {EvenPlayers(IndianTeam)}
                </div>
                <hr />
                <div>
                    <h1>List of Indian Players Merged:</h1>
                    <ListofIndianPlayers IndianPlayers={IndianPlayers} />
                </div>
            </div>
        );
    }
}

export default App;
