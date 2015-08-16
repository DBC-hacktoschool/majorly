$(document).ready(function() {

  //Prep container for logo fadeIn
  $('.container').hide();

  //Trigger function to display logo
  renderLogo();

  $( "#test_button" ).click(function() {
    // For testing the date retrive.
    parseInit();
    parseGet("STEM");
  });  
})

function parseInit () {
  Parse.initialize("HfU6NDpr9CX1Aa6WZr15OTkkUsIVeErVvCoHZLjX", "6IbILyoYwoxBpWaWSDiiBHpSEMUA3iaVCEKX6t3R");
}

function parseGet(table) {
  var obj = Parse.Object.extend(table);
  var query = new Parse.Query(obj);

  query.find({
    success: function(results) {
      var object = results[0];
      alert("descp: " + object.get("descp"));
        // generate page content here
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
}

function showTest() {
  var GameScore = Parse.Object.extend("GameScore");
  var gameScore = new GameScore();

  gameScore.set("score", 1337);
  gameScore.set("playerName", "Sean Plott");
  gameScore.set("cheatMode", false);

  alert("I am an alert box!");

  gameScore.save(null, {
    success: function(gameScore) {
      // Execute any logic that should take place after the object is saved.
      alert('New object created with objectId: ' + gameScore.id);
    },
    error: function(gameScore, error) {
      // Execute any logic that should take place if the save fails.
      // error is a Parse.Error with an error code and message.
      alert('Failed to create new object, with error code: ' + error.message);
    }
  });
}

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

      showQ();

    });
  })
}

//Function will render the quiz of questions.
function showQ () {
  //Lead into first quesiton
  $('.intro-header').fadeOut(3000, function() {

    var question1 = '<h1 class="question">Which of the following would you rather to do?</h1>'
    //
    $('.container').empty().append(question1).hide().fadeIn(3000)
  })
}
