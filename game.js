'use strict';

$(function(){

//Select a number between 19 and 120 to be shown at the start of the game
var randomScoreToWin = Math.floor(Math.random() * 120-19 + 1) + 19;
$('#targetScore').text(randomScoreToWin);

//Generate random values for the crystals between 1 and 12
var randomBlue = 0;
var randomGreen = 0;
var randomRed = 0;
var randomYellow = 0;

//Total score, wins, and losses variables
var currentScore = 0;
var wins = 0;
var losses = 0;

// Placeholders for scores

$('#wins').text(wins);
$('#losses').text(losses);
reset()

// Reset function

function reset () {
    randomScoreToWin=Math.floor(Math.random() * 120-19 + 1) + 19;
    $('#targetScore').text(randomScoreToWin);
    randomBlue = randomRange(1, 12);
    randomGreen = randomRange(1, 12);
    randomRed = randomRange(1, 12);
    randomYellow = randomRange(1, 12);
    currentScore = 0;
    $('#currentScore').text(currentScore);
}

// Add losses to player's score and calls reset

function loserloser () {
    losses++
    $('#losses').text(losses);
    reset ()
}

// Add wins to player's score and calls reset

function winnerwinner () {
    wins++
    $('wins').text()
}
 // Crystal clicking

 $('#blue').on('click', function() {
    currentScore = currentScore + randomBlue;
    $('#currentScore').text(currentScore);
    if (currentScore === randomScoreToWin) {
        winnerwinner ();
    } else if (currentScore > randomScoreToWin) {
        loserloser ();

    }

 })

$('#green').on('click', function() {
    currentScore = currentScore + randomGreen;
    $('#currentScore').text(currentScore);
    if (currentScore === randomScoreToWin) {
        winnerwinner ();
    } else if (currentScore > randomScoreToWin) {
        loserloser ();

    }

 })

$('#red').on('click', function() {
    currentScore = currentScore + randomRed;
    $('#currentScore').text(currentScore);
    if (currentScore === randomScoreToWin) {
        winnerwinner ();
    } else if (currentScore > randomScoreToWin) {
        loserloser ();

    }

 })

$('#yellow').on('click', function() {
    currentScore = currentScore + randomYellow;
    $('#currentScore').text(currentScore);
    if (currentScore === randomScoreToWin) {
        winnerwinner ();
    } else if (currentScore > randomScoreToWin) {
        loserloser ();

    }

 })

});

function randomRange (min, max) {
  return Math.floor(Math.random() * max) + min;
}
