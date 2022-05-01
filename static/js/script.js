// Challenge 1: Your age in days
// get year born in
function ageInDays() {
    var birthYear = prompt('what year were you born?');
    // console.log(birthYear);
    var ageDays = (2022 - birthYear) * 365;
    var h1 = document.createElement('h1'); // creates an h1 element
    var textAnswer = document.createTextNode('You are ' + ageDays + ' days old');
    h1.setAttribute('id', 'ageInDays'); // set this h1 tags id = ageInDays 
    h1.appendChild(textAnswer); // append the var textanswer to h1 
    document.getElementById('flex-box-result').appendChild(h1); // append h1 to id= flex-box-result
    // console.log(ageDays);
}

function reset() {
    document.getElementById('ageInDays').remove();
}


// Challenge 2: Cat Generator
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

// Challenge 3: Rock, Paper, Scissors
function rpsGame(playerChoice) {
    console.log(playerChoice);
    var humanChoice, aiChoice;
    humanChoice = playerChoice.id;
    aiChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice: ', aiChoice);

    results = decideWinner(humanChoice, aiChoice); // [1, 0] or [0.5, 05] or [0,1] human lost | ai won
    console.log(results);

    message = finalMessage(results); // returns{'message': 'You won!', 'color': 'green'}
    rpsFrontEnd(playerChoice.id, aiChoice, message);
    console.log(message);
}

// repl.it - for online ide
function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(yourChoice, computerChoice) {
    // 1 win, 0.5 draw, 0 lose
    var rpsDb = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

    var yourScore = rpsDb[yourChoice][computerChoice];
    var computerScore = rpsDb[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'};
    }else {
        return {'message': 'You won!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDb = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // remove all images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDivChoice = document.createElement('div');
    var aiDivChoice = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDivChoice.innerHTML = "<img src='" + imagesDb[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px #0000ff;'>"

    aiDivChoice.innerHTML = "<img src='" + imagesDb[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgb(202, 33, 33);'>"

    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"

    document.getElementById('flex-box-rps-div').appendChild(humanDivChoice);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(aiDivChoice);
    
}