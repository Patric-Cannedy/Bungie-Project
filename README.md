# Bungie-Project
A simple website that interacts with Bungie's Destiny 2 API and returns data. Users should be able to search for items from the database.

## Status
This project is currently in development. 
The functionality it does have is the abiliy to send inputs and retrieve and display information.

## Technologies
This project primarily runs off of Javascript using React.Js and MaterialUI as a CSS framework.
Also uses other plugins for other small processing.

## Setup
Download or Clone the repo.
`npm install` to install all dependencies.
The app will start with the command `npm run start` and runs on port 5000 at `localhost:5000`.
Once a request is sent it will log the repsonse object that is returned in the console.

## My Approach and Reflections 
As I continue to learn modern Javascript, I wanted to start a project that utilizes APIs and a CSS Framework.
I chose the Destiny 2 API as it was something familiar to me. 
The app is structured with App.js containing the main logic and setting the state so it can send the props downwards as needed. The site is still in development so many things are only coded for appearance however the header contains a functioning searchbar that will send inputs to my backend to retrieve the info. I have a results page that returns the item data for display.
Due to time restraints, I scaled back the website and thus users cannot access information pertaining to their own characters.

A big challenge I encountered was understanding the methods of which data can be destructured or looped through and understanding the management of state. 

In further iterations of my project, I plan to add asychronicity so data can load in the background while pages load, address the scale of the site by populating it with more components, and adding authentication so users can safely interact with the website.