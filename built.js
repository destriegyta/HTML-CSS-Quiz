// Get references to elements
const studentInfoSection = document.getElementById('student-info');
const htmlQuestionsSection = document.getElementById('html-questions');
const cssQuestionsSection = document.getElementById('css-questions');
const submitButton = document.querySelector('button[type="submit"]');

// Add event listener to submit button
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Validate student information
  const studentName = document.getElementById('student-name').value;
  const studentEmail = document.getElementById('student-email').value;
  const birthDate = document.getElementById('birth-date').value;

  if (!studentName || !studentEmail || !birthDate) {
    alert('Please fill in all required fields.');
    return;
  }

  // Validate HTML and CSS questions
  const htmlQuestionOne = document.querySelector('input[name="q1"]:checked');
  const htmlQuestionTwo = document.querySelector('input[name="q2"]:checked');
  const cssSelector = document.getElementById('selector').value;
  const cssTextarea = document.getElementById('css-textarea').value;

  if (!htmlQuestionOne || !htmlQuestionTwo || !cssSelector) {
    alert('Please answer all questions.');
    return;
  }

  // Submit form data
  const formData = new FormData(document.querySelector('form'));
  fetch('https://freecodecamp.org/practice-project/accessibility-quiz', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert('Quiz submitted successfully!');
    } else {
      alert('Error submitting quiz. Please try again.');
    }
  })
  .catch(error => {
    alert('An error occurred while submitting the quiz.');
  });
});