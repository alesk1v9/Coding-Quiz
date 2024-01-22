document.addEventListener("DOMContentLoaded", function () {
    displayHighScores();

    
    document.getElementById("clear-scores-btn").addEventListener("click", clearScores);
    document.getElementById("go-home-btn").addEventListener("click", goToHome);
});

function displayHighScores() {
    var highScoresContainer = document.getElementById("high-scores");

    
    var userScore = localStorage.getItem("userScore");
    var userInitials = localStorage.getItem("userInitials");

    
    if (userScore !== null && userInitials !== null) {
        
        highScoresContainer.innerHTML = "<p>Initials: " + userInitials + "<br>Score: " + userScore + "</p>";
    } else {
        
        highScoresContainer.innerHTML = "<p>No high scores available.</p>";
    }
}
//clear scoreboard 
function clearScores() {
    
    localStorage.removeItem("userScore");
    localStorage.removeItem("userInitials");

    
    displayHighScores();
}

// back to the main page
function goToHome() {
    
    window.location.href = "index.html";
}