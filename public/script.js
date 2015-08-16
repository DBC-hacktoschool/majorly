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

  }).fadeIn(2000);

  chooseStudy();

}

//Function will render areas of study for user to choose from and 'i don't know button' that will trigger quiz
function chooseStudy () {

  //Clear image and container
  $('.container img').delay(3000).fadeOut(2000, function () {
    //Empty the container
    $('.container').empty();

    //Display intro text and lead into first question
    $('.container').append(function(){

      return '<p class="choice-intro" style="font-size:1em;">Please choose your relevant area of study. <br> <span style="color:red;font-size:.5em;">If you have not chosen one yet, please choose the "I don\'t know" button</span></p><hr>';


    }).hide().fadeIn(2000, function() {
      var count = 0;

      $('.container').append(function() {

        return '<div class="choice-container" style="margin: 5% auto"></div>'

      })

      while (count < 5) {


        $('.choice-container').append(function(){

          if (count === 0) {

            return'<div id="' + count + '" style="width:18%;display:inline-block;border:1px solid red;">' + count + '</div>';

          } else {

              return '<div id="' + count + '" style="width:18%;display:inline-block;border:1px solid red;margin-left: 5px">' + count + '</div>';

          }


        })

        count++;

      }

      $('.container').append(function() {

        return '<div style="border:1px solid green;width:18%;margin:25px auto"id="no-se">' + count + '<div>';

      })


    });
  })

}

//Function to empty container and display first question
function startQuiz() {
  var msg = '<p class="intro-header"> Let\'s get to know you better </p>'

  //Clear image and container
  $('.container img').delay(3000).fadeOut(2000, function () {
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
  $('.intro-header').fadeOut(2000, function() {

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
  var scores = [];

  //Show first question
  $('#' + counter).fadeIn(2000);

  //Click event for user response
  $('button').on('click', function (event) {

    counter += 1;

    if (counter > 4) {

      var mode = findMode(scores);
      console.log('Score list: ' + scores);
      console.log('Mode: ' + mode);

      showStudyArea(mode);

    }

    var buttonClicked = $(this).text();

    _.each(answers, function(answerList){


      _.each(answerList, function(answer, i) {

        if (buttonClicked === answer) {
          scores.push(i);

        }

      })


    })


    $('#' + (counter - 1)).fadeOut(1000, function() {

      $(this).remove();

    })

    $('#' + counter).delay(1000).fadeIn(2000);


  })
}

//Function will find the most frequently occurring number in answer set.
function findMode(array) {
  var mode, count = 0;

  _.each(array, function (number, index) {
    var num, c = 0;

    _.each(array, function (num, i) {

      if (i === index) {

        return;

      } else if (num === number) {

        c += 1;
      }

    })

    if (c > count) {

      count = c;
      mode = number;

    }

  })

  if (mode === undefined) {

    return Math.floor(Math.random() * 5)

  } else {

    return mode;

  }

}

//Function will tell user what area of study they
function showStudyArea (mode) {
  var areaOfStudy;

  console.log(mode);

  switch (mode) {

    case 0:
      areaOfStudy = 'STEM';
      break;

    case 1:
      areaOfStudy = 'Art';
      break;

    case 2:
        areaOfStudy = 'Business';
        break;

    case 3:
          areaOfStudy = 'Social Sciences';
          break;

    case 4:
          areaOfStudy = 'Humanities';
          break;
    }

    //Empty out container and tell the user what of area of study they fall in
    $('.container').empty()

    $('.container').append(function () {

      return '<p class="result">Wow, You\'re quite unique! We think ' + '<span style="color:red;font-weight:bold;">' + areaOfStudy + '</span>' + ' would best fit your interests.</p>';

    }).hide().fadeIn(2000).delay(1000).fadeOut(2000, function () {

      $('.container').empty().append(function () {

        return '<p class="result">Please wait while we configure your workspace :)</p>'

      }).hide().fadeIn(1000);

    })



}
