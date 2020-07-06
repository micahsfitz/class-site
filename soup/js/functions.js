// phrases
var loadMssg = [
 "life should be a risk",
 "be spontaneous",
 "make a decision",
 "trust what things seem to be",
 "stay when you want to run",
 "what are your highest aspirations?",
 "experience it",
 "you can adore the distance",
 "courage will serve you better than complete freedom",
 "say something you've held back",
 "pause,collect yourself",
 "prove yourself to yourself",
 "you are a complete mystery",
 "reality is never permanent",
 "don't get stuck for too long",
];
// randomize
document.getElementById("phrase").innerHTML = loadMssg[
  Math.floor(Math.random() * loadMssg.length)
];

// this is the function that changes the active phrase
function newPhrase() {
  document.getElementById("phrase").innerHTML = loadMssg[
    Math.floor(Math.random() * loadMssg.length)
  ];
}
