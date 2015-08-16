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
  var msg = '<p class="intro-header"> Let\'s get to know you better </p>'

  //Clear image and container
  $('.container img').delay(3000).fadeOut(3000, function () {
    //Empty the container
    $('.container').empty();

    //Display intro text and lead into first question
    $('.container').append(msg).hide().fadeIn(2000, function() {

      makeQ();

    });
  })
}

//Function will render the quiz of questions.
function makeQ () {


  //Create and hide all questions
  $('.intro-header').fadeOut(3000, function() {

    //Empty the container to allow for the questions
    $('.container').empty();

    _.each(questions, function (question, index) {

      $('.container').append(function(){


        return '<div id="' + index + '">' + question + '<hr></div>'

      });

      $('#' + index).hide()

      _.each(answers, function (answerList, i) {

        _.each(answerList, function (answer, j){

          if (i === index) {

            $('#' + index).append(function(){

              if (j === 0) {

                return '<button style="margin: 10px 0 10px 0">' + answer + '</button>' + '<br>';

              }

              return '<button>' + answer + '</button>' + '<br>';

            });

          }
        })
      })
    })

    showQ();

  })
}


//Function will render first question and then subsequent questions based on click event
function showQ () {

  //Initialize counter variable to match index of questions array
  var counter = 0;
  var score = 0;

  //Show first question
  $('#' + counter).fadeIn(2000);

  //Click event for user response
  $('button').on('click', function (event) {

    counter += 1;

    

    $('#' + (counter - 1)).remove()

    $('#' + counter).fadeIn(1000);



  })



}
