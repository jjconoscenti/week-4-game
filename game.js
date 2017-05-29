$(function(){

//Select a number between 19 and 120 to be shown at the start of the game
var randomScoreToWin = Math.floor(Math.random() * 120-19 + 1) + 19;
$('#targetScore').text(randomScoreToWin);

//Generate random values for the crystals between 1 and 12
var randomBlue = Math.floor(Math.random() * 12) + 1;
var randomGreen = Math.floor(Math.random() * 12) + 1;
var randomRed = Math.floor(Math.random() * 12) + 1;
var randomYellow = Math.floor(Math.random() * 12) + 1;

//Total score, wins, and losses variables

var totalScore = 0;
var wins = 0;
var losses = 0;

// Placeholders for scores

$('#wins').text(wins);
$('#losses').text(losses);

// Reset function

function reset () {
    randomScoreToWin=Math.floor(Math.random() * 120-19 + 1) + 19;
    $('targetScore').text(randomScoreToWin);
    randomBlue = Math.floor(Math.random() * 12) + 1;
    randomGreen = Math.floor(Math.random() * 12) + 1;
    randomRed = Math.floor(Math.random() * 12) + 1;
    randomYellow = Math.floor(Math.random() * 12) + 1;
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
