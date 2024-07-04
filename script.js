const questions = [
    {
      question: 'Which planet is known as the "Red Planet"?',
      answers: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correct: 1,
    },
    {
      question: 'What is the capital of France?',
      answers: [
        'Berlin',
        'London',
        'Paris',
        'Rome'],
        correct: 2,
      
    },
    {
      question: 'What is the largest mammal on Earth?',
      answers: ['Elephant', 'Blue whale', 'Girraffe', 'Gorilla'],
      correct: 1,
    },
    {
      question: 'Who invented JavaScript?',
      answers: [
        'Brendan Eich',
        'Yukihiro Matsumoto',
        'Larry Wall',
        'Guido Van Rossum',
      ],
      correct: 0,
    },
    {
      question: ' In which year did the Titanic sink?',
      answers: [
        '1905',
        '1912',
        '1920',
        '1921',
      ],
      correct: 1,
    },
    {
      question: 'Who wrote the play "Romeo and Juliet"?',
      answers: ['William Shakespeare', 'Charles Dickens', 'Mark  Twain', 'Sheldon Cooper'],
      correct: 0,
    },
    {
      question: 'What is the chemical symbol for gold?',
      answers: ['Gd', 'Fe', 'Ag', 'Au'],
      correct: 3,
    },
    {
      question: 'Which country is known as the "Land of the Rising Sun"?',
      answers: [
        'Thailand',
        'Kenya',
        'Japan',
        'Korea',
      ],
      correct: 2,
    },
    {
      question: 'What is the capital of Australia?',
      answers: ['Sydney', 'Canberra', 'Melbourne', 'Brisbane'],
      correct: 1,
    },
    {
      question:
        'Which gas do plants absorb during photosynthesis?',
      answers: [
        'Oxygen',
        'Carbon Monoxide',
        'Nitrogen',
        'Carbon Dioxide',
      ],
      correct: 3,
    },
  ];

// Assigning variables
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
const result = document.getElementById('result')
const imgContainer = document.getElementById ('img-container')
const gifPerfectscore = document.getElementById('perfect-score')
const gifGoodjob = document.getElementById('good-job')
const gifNotbad = document.getElementById('not-bad')
const gifOops = document.getElementById('oops')
let currQuestion = 0
let score = 0




// Go to the next question and if no more, display total score.
document.getElementById('next-btn').addEventListener('click', () => {
  currQuestion++; prevQuestion();
  if (currQuestion < questions.length) {
      displayQuestion();
      document.getElementById('next-btn').disabled = true;
  } else  { removeQuestion (); 
      result.style.display = 'initial'
      imgContainer.style.display = 'initial'
      result.innerHTML = `<p class="results"> Your Total Score is: ${score}/${questions.length}</p>`; displayGifs()
  } 
});


//What happens when you click the previous button.
document.getElementById('prev-btn').addEventListener('click', () => {
  if (currQuestion > 0) {
    currQuestion--;
    displayQuestion();
     }

  // Disable previous button if at the first question
  if (currQuestion === 0) {
    document.getElementById('prev-btn').disabled = true;
  }
});

//Function to enable previous button

function prevQuestion(){
  if (currQuestion > 0) {
    document.getElementById('prev-btn').disabled = false;}
}

// Assigning questions in the array to the element named question.
function displayQuestion() {
  document.getElementById('question').innerText = questions[currQuestion].question;

  //Assigning questions in the array to a variable called answers
  const answers = questions[currQuestion].answers;

  // Listing arrays and getting the div to display them on click 
  const answersOptions = answers.map((answer, index) => `<button class="option-btn" onclick="selectAnswer(${index})">${answer}</button>`).join('');

  //Assigning the mapped arrays into the div element called options
  document.getElementById('options').innerHTML = answersOptions;
}

//Function for previous question



// Check if answer is correct, enable button to go to next question and score user if correct
function selectAnswer(index) {
  if (index === questions[currQuestion].correct) {
      score++;
  }
  document.getElementById('next-btn').disabled = false;
}

// Remove other elements except score.

function removeQuestion () {  
  questionElement.style.display = 'none';
  optionsElement.style.display = 'none';
  nextButton.style.display = 'none';
  prevButton.style.display = 'none'}

  
// function to show different images based on scores 

function displayGifs(){ 
  if  (score === 10) { gifPerfectscore.style.display = 'initial' }
  if  (score >= 7 && score <= 9) {  gifGoodjob.style.display = 'initial'}
  if  (score >= 5 && score <= 6) {  gifNotbad.style.display = 'initial'}
  if  (score <= 4) {  gifOops.style.display = 'initial'}
}




// Invoke function
displayQuestion();
prevQuestion()


// add a previous button
// add to github