
//initiate the fullpage jquery function
//fullPage plugin by Alvaro Trigo
new fullpage('#fullpage', {
  //section background colors of each slide
  sectionsColor: ['#EA4646', '#5898FF', '#FF973E','#74B742','#EA4646','#0A0A0A','#0A0A0A','#0A0A0A','#0A0A0A','#0A0A0A'],
  //setting anchors of each slide
  anchors: ['Home', 'PerfectBlue','MillenniumActress','TokyoGodfathers','Paprika','InMemoryofSatoshiKon','Biography','Quiz','Credits','ThankYou'],
  //enable navigation navigationTooltips
  navigation: true,
  //set navigationTooltips position
  navigationPosition: 'left',
  //nameing the navigationTooltips
  navigationTooltips: ['Home', 'Perfect Blue','Millennium Actress','Tokyo Godfathers','Paprika','In Memory of Satoshi Kon', 'Biography','Quiz','Credits','Thank You'],
  //define how fast the pages go
  scrollingSpeed:'900',
  //enable continuous vertical scrolling from last slide to first slide and vice versa
  continuousVertical:'True',
});


//add typewriter effect CSS typewriter BY Danielgroen for text at home page
document.addEventListener('DOMContentLoaded',function(event){

  // define the text variable
  var dataText = [ "October 12, 1963 – August 24, 2010"];

  //put the text to the typeWriter function through a loop
  function typeWriter(text, i, fnCallback) {

    // check if it is the last character; if not, type it
    if (i < (text.length)) {

      //keep adding characters
     document.querySelector(".OP2").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // set an interval before typing the next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 150);
    }

    // when finished, see if there's a callback
    else if (typeof fnCallback == 'function') {
      // interval between typing the next sentence
      setTimeout(fnCallback, 700);
    }
  }

  // start a the typewirter animation!
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }

     // see if text [i] exists; if it does, continue the function
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       //start the next text
       StartTextAnimation(i + 1);
     });
    }
  }

  //start text animation
  StartTextAnimation(0);
});

//add typewriter effect CSS typewriter BY Danielgroen for "In Memory of Satoshi Kon"
document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ "In Memory of Satoshi Kon"];
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector(".credits").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 120);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
  StartTextAnimation(0);
});

//add typewriter effect CSS typewriter BY Danielgroen for the Biography of Satoshi Kon
document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ "Satoshi Kon was a Japanese film director, animator, screenwriter and manga artist from Sapporo, Hokkaido and a member of the Japanese Animation Creators Association. Kon’s dramatic anime films offered biting social commentary, fantastical dreamscapes, and glimpses of his vision that people live in multiple realities.","Over the course of Kon’s life he made four films, all examining dualities. Identities on-screen and off screen in the shocking and provocative Perfect Blue, public and private life in the quietly beautiful Millennium Actress, reality and fantasy in comedy Tokyo Godfathers, and the virtual and the real in the hyperactive Paprika.","In May 2010, Satoshi Kon was diagnosed with pancreatic cancer and given half a year to live. At the time he was working on a new film titled Dreaming Machine; however, he did not have much time left. Kon composed a final message to his fans that was to uploaded to his blog upon his death.","He died on August 24 at age 46."];
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector(".KS_bio").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 70);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 2000);
    }
  }
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
  StartTextAnimation(0);
});

//add typewriter effect CSS typewriter BY Danielgroen for quiz title
document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ "How much do you know about Satoshi Kon and his films?"];
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector(".quiz_title").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 2000);
    }
  }
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
  StartTextAnimation(0);
});

//add typewriter effect CSS typewriter BY Danielgroen for thank you page
document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ "thank you"];
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector(".EN").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 120);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
  StartTextAnimation(0);
});


//when click the start button the quiz appears
$(document).ready(function(){
  $(".button_quiz").click(function(){
    $("#quiz_container").fadeIn("slow" );
  });
});


//when click the information button the information slide appears for all the movies
$(document).ready(function(){
  $(".slide_button").click(function(){
    $(this).next().slideToggle( "slow","swing");
  });
});

//when click the information button the information slide appears for the Biography of Satoshi Kon
$(document).ready(function(){
  $(".slide_button_KS").click(function(){
    $(this).next().fadeToggle( "slow","swing");
  });
});

//smooth transition of text fade in for each of the movie information
$(document).ready(function(){
  $("#buttonPB").click(function(){
    console.log('test');
    $("#p2").fadeToggle(800);
  });
});

$(document).ready(function(){
  $(".MA").click(function(){
    console.log('test');
    $(".p3").fadeToggle(800);
  });
});

$(document).ready(function(){
  $(".TG").click(function(){
    console.log('test');
    $(".p4").fadeToggle(800);
  });
});

$(document).ready(function(){
  $(".P").click(function(){
    console.log('test');
    $(".p5").fadeToggle(800);
  });
});


//blink down arrow to make it more obvious
function blinker() {
    $('.blink').fadeOut(800);
    $('.blink').fadeIn(800);
}
setInterval(blinker, 2000);

//fadein effect for elements that need to fade in
function fade_in() {
     $('.fade_in').fadeIn(800);
}



//initiate the quiz from dlxQuiz jQuery Plugin by Chyno Deluxe
$("#quiz1").dlxQuiz({
    quizData: {
        "questions": [{
          //set question
            "q": "Who is Satoshi Kon?",
            //set correct answers
            "a": "A film director",
            //set options
            "options": [
                "An actor",
                "A musician",
                "A film director"
            ]
        }, {
            "q": "Which of the following is correct",
            "a": "Paprika is a 2006 Japanese science-fiction anime film",
            "options": [
                "Perfect Blue is a 1997 Japanese animated comedy film",
                "The main character is named Mima  in Millennium Actress ",
                "Paprika is a 2006 Japanese science-fiction anime film"
            ]
        }, {
            "q": "One of the three main characters in Tokyo Godfathers is a trans woman",
            "a": "True",
            "options": [
                "True",
                "False",
                "I don't know"
            ]
        }, {
            "q": "What technique is Satoshi Kon known for? ",
            "a": "Matching actions to create a fluid editing style",
            "options": [
                "Using low angle shots to create a sense of suspense ",
                "Shooting at the golden hour to have surreal lighting",
                "Matching actions to create a fluid editing style"
            ]
        }, {
            "q": "Which film is most similar to Satoshi Kon's film Paprika?",
            "a": "Inception(2010)",
            "options": [
                "Jurassic World (2015)",
                "The Matrix (1999)",
                "Inception(2010)"
            ]
        }]
    }
});
