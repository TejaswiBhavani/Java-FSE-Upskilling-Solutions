# Cricket App (ES6 Features)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Overview

This is a React application named **cricketapp** that demonstrates the use of various modern ES6 features in JavaScript. 

The application utilizes class and functional components to highlight the following ES6 concepts:
- **`map()` Method**: Iterates through an array of players to dynamically render a list of names and scores in the DOM.
- **Arrow Functions**: Employs concise ES6 arrow functions, specifically to filter out players with scores below 70 (`players.filter(p => p.score < 70)`).
- **Destructuring**: Showcases array destructuring by extracting specific odd and even positioned players from an `IndianTeam` array (e.g., `const [first, , third, , fifth] = IndianTeam;`).
- **Spread Operator (Merging)**: Merges the `T20Players` and `RanjiTrophyPlayers` arrays together into a single, unified array (`...T20Players, ...RanjiTrophyPlayers`).
- **Conditional Rendering**: Displays different components based on a simple boolean `flag` variable.

### Output

![Cricket App Output](Screenshot%202026-07-24%20195859.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
