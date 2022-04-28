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