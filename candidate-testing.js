const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let questions = ["Who was the first American woman in space? ", "True of false: 5 kilometer == 5000 meters? ", "(5+3)/2*10=? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Please enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (i = 0; i < 5; i++ ){ 
  candidateAnswers[i] = input.question(questions[i]);
}
//console.log(candidateAnswers);
}
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
//if (candidateAnswer === "Sally Ride"){
//  console.log("Correct!");
//} else {
//  console.log("Incorrect. The correct answer is Sally Ride.");
//}
console.log(`Candidate Name: ${candidateName}`);

for (i=0; i < 5; i++){
//console.log(`Your answer for question #${i+1} was ${candidateAnswers[i]}. The correct answer was ${correctAnswers[i]}.`);
console.log(`${i+1}) ${questions[i]} 
Your answer: ${candidateAnswers[i]} 
Correct Answer: ${correctAnswers[i]}

`);
}

let grade = 0;
function sumCorrectAnswers(grade) {
   return grade += 1;
}

let j = 0
while (j < 5) {
   if (candidateAnswers[j].toLowerCase() === correctAnswers[j].toLowerCase()) {
   grade = sumCorrectAnswers(grade);
   j++;
  } else {
     j++;
    }
}
//console.log(grade);

if (grade >= 4) {
  console.log(`>>> Overall Grade: ${(grade / 5) * 100}% (${grade} of 5 responses correct) <<<
>>> Status: PASSED <<<`);
} else {
    console.log(`>>> Overall Grade: ${((grade / 5) * 100)}% (${grade} of 5 responses correct) <<<
>>> Status: FAILED <<<`);
  }
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
console.log("Hello, " + candidateName + ".");

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}
 

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};