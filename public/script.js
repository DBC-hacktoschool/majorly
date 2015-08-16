$(document).ready(function() {

  //Prep container for logo fadeIn
  $('.container').hide();

  //Trigger function to display logo
  renderLogo();

})

//Function will display logo on center of the screen
function renderLogo () {

  //Fade display in
  $('.container').append(function(){

    return '<img src="./assets/images/logo_majorly_text.png" />';

  }).fadeIn(3000);

  startQuiz();

}

//Function to empty container and display first question
function startQuiz() {
  var msg = '<h1 class="intro-header"> Let gets to know you better </h1>'
  var question1 = '<h1 class="question">Which of the following would you rather to do?</h1>'
  var answers;

  //Clear image and container
  $('.container img').delay(3000).fadeOut(3000, function () {
    //Empty the container
    $('.container').empty();

    //Display intro text and lead into first question
    $('.container').append(msg).hide().fadeIn(2000, function() {

      

    });
  })
}

function showQ () {




}
