var arry = [];
var check;
var submit = $('.submit');
var timeSubmit = $('.timeButt');
submit.on('click', setStorage);

function setStorage(){
  var input1 = $('.inp1').val();
  // var input2 = $('.inp2').val();
  // var input3 = $('.inp3').val();
  // var input4 = $('.inp4').val();
  // var input5 = $('.inp5').val();

  localStorage.setItem("input1", input1);
  // localStorage.setItem("input2", input2);
  // localStorage.setItem("input3", input3);
  // localStorage.setItem("input4", input4);
  // localStorage.setItem("input5", input5);


}
submit.on('click', setTime);

function setTime() {
  var time1 = $('.time1').val();
  // var time2 = $('.time2').val();
  // var time3 = $('.time3').val();
  // var time4 = $('.time4').val();
  // var time5 = $('.time5').val();

  localStorage.setItem("time1", time1);
  // localStorage.setItem("time2", time2);
  // localStorage.setItem("time3", time3);
  // localStorage.setItem("time4", time4);
  // localStorage.setItem("time5", time5);

}
submit.on("click", wantedTime);

function wantedTime() {
  var want1 = $('.want1').val();
  // var want2 = $('.want2').val();
  // var want3 = $('.want3').val();
  // var want4 = $('.want4').val();
  // var want5 = $('.want5').val();

  localStorage.setItem("want1", want1);
  // localStorage.setItem("want2", want2);
  // localStorage.setItem("want3", want3);
  // localStorage.setItem("want4", want4);
  // localStorage.setItem("want5", want5);

}

var cardContainer = $('.cardContainer');
var steps = $('.steps');
var timeInput = $('.timeInput');

submit.on("click", showCalendar);
// submit.on("click", inputSteps);
function showCalendar() {

  // var num = localStorage.getItem('time1');
  // var hours = (num / 60);
  // var rhours = Math.floor(hours);
  // var minutes = (hours - rhours) * 60;
  // var rminutes = Math.round(minutes);
  // var finalNum= num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
  // steps.css("visibility","hidden")
  // timeInput.css("visibility","hidden")

  // event.target.parentNode.remove(input);
  cardContainer.append(`<article class = "appended">
  <section class="day"><p></p>
  You will finish your project "${localStorage.getItem('input1')}" in ${Math.ceil(localStorage.getItem('time1') / localStorage.getItem('want1'))} days.<br>


  </article>`)

  // you will finish in ${localStorage.getItem('time2') / localStorage.getItem('want2')} ${rhours} hour(s) and ${rminutes} minutes(s)<br>
  // You will finish in ${localStorage.getItem('time3') / localStorage.getItem('want3')} ${rhours} hour(s) and ${rminutes} minutes(s)<br>
  // You will finish in ${localStorage.getItem('time4') / localStorage.getItem('want4')} ${rhours} hour(s) and ${rminutes} minutes(s)<br>
  // You will finish in ${localStorage.getItem('time5') / localStorage.getItem('want5')} ${rhours} hour(s) and ${rminutes} minutes(s)<br>
  // // ${localStorage.getItem('input2')}: ${localStorage.getItem('time2')} minutes <br>
  // ${localStorage.getItem('input3')}: ${localStorage.getItem('time3')} minutes <br>
  // ${localStorage.getItem('input4')}: ${localStorage.getItem('time4')} minutes <br>
  // ${localStorage.getItem('input5')}: ${localStorage.getItem('time5')} minutes <br></section>
  // // <section class="day"><p> Tomorrow: </p> <br>
  // ${localStorage.getItem('input1')}: ${localStorage.getItem('time1')/5} minutes <br>
  // ${localStorage.getItem('input2')}: ${localStorage.getItem('time2')/5} minutes <br>
  // ${localStorage.getItem('input3')}: ${localStorage.getItem('time3')/5} minutes <br>
  // ${localStorage.getItem('input4')}: ${localStorage.getItem('time4')/5} minutes <br>
  // ${localStorage.getItem('input5')}: ${localStorage.getItem('time5')/5} minutes <br></section>
  // <section class="day"><p> The next day: </p> <br>
  // ${localStorage.getItem('input1')}: ${localStorage.getItem('time1')/5} minutes <br>
  // ${localStorage.getItem('input2')}: ${localStorage.getItem('time2')/5} minutes <br>
  // ${localStorage.getItem('input3')}: ${localStorage.getItem('time3')/5} minutes <br>
  // ${localStorage.getItem('input4')}: ${localStorage.getItem('time4')/5} minutes <br>
  // ${localStorage.getItem('input5')}: ${localStorage.getItem('time5')/5} minutes <br></section>
  // <section class="day"><p> The next next day: </p> <br>
  // ${localStorage.getItem('input1')}: ${localStorage.getItem('time1')/5} minutes <br>
  // ${localStorage.getItem('input2')}: ${localStorage.getItem('time2')/5} minutes <br>
  // ${localStorage.getItem('input3')}: ${localStorage.getItem('time3')/5} minutes <br>
  // ${localStorage.getItem('input4')}: ${localStorage.getItem('time4')/5} minutes <br>
  // ${localStorage.getItem('input5')}: ${localStorage.getItem('time5')/5} minutes <br></section>
  // <section class="day"><p> The next next next day </p> <br>
  // ${localStorage.getItem('input1')}: ${localStorage.getItem('time1')/5} minutes <br>
  // ${localStorage.getItem('input2')}: ${localStorage.getItem('time2')/5} minutes <br>
  // ${localStorage.getItem('input3')}: ${localStorage.getItem('time3')/5} minutes <br>
  // ${localStorage.getItem('input4')}: ${localStorage.getItem('time4')/5} minutes <br>
  // ${localStorage.getItem('input5')}: ${localStorage.getItem('time5')/5} minutes <br></section>


}
timeSubmit.on("click", timeConvert);

function timeConvert(timeHours) {
  var timeHours = $('.timeConvert').val();
  console.log(timeHours)
  var timeMinutes = timeHours*60;
  var p = $('.minutes');
  // console.log(timeMinutes);
  p.append(`<p class="toRemove">${timeMinutes} minutes<button type = "radio" id="checkbox"> done. </button></p> `);
  // time1.append(timeMinutes);
  // time2.append(timeMinutes);
  // time3.append(timeMinutes);
  // time4.append(timeMinutes);
  // time5.append(timeMinutes);
  check = $("#checkbox");
  check.on("click",removeItem);
  console.log(check)
  }

  // check.on("click",removeItem);
  function removeItem() {
    console.log("HEYYYY")
    event.target.parentNode.remove();
  }
  // var check = $(".checkbox");
  // // var toRemove = $(".toRemove");
  // check.on("click",removeItem());
  //
  //
  // function removeItem() {
  //   event.target.parentNode.remove();
  // }
  function inIframe() {
      try {
          return window.self !== window.top;
      } catch (e) {
          return true;
      }
  }
  		var colors = [
  			'#490A3D',
  			'#BD1550',
  			'#E97F02',
  			'#F8CA00',
  			'#8A9B0F',
  			'#69D2E7',
  			'#FA6900',
  			'#16a085',
  			'#27ae60',
  			'#2c3e50',
  			'#f39c12',
  			'#e74c3c',
  			'#9b59b6',
  			'#FB6964',
  			'#342224',
  			'#472E32',
  			'#77B1A9',
  			'#73A857'
  		];

  var quotes = [
      ["Your limitation—it's only your imagination."],
      ["Push yourself, because no one else is going to do it for you."],
      ["The harder you work for something, the greater you'll feel when you achieve it."],
  	["As long as you keep going, you'll keep getting better. And as you get better, you gain more confidence. That alone is success."]
  	["It is our choices, Harry, that show what we truly are, far more than our abilities.","J.K. Rowling, Harry Potter and the Chamber of Secrets"],
  	["Great things never come from comfort zones."],
  	["Trust yourself. You know more than you think you do."],
  	["No one can make you feel inferior without your consent.","Eleanor Roosevelt, This is My Story"],
  	["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."],
  	["Consult not your fears but your hopes and your dreams. Think not about your frustrations, but about your unfulfilled potential. Concern yourself not with what you tried and failed in, but with what it is still possible for you to do."]
  	];


  var currentQuote = "";
  var currentAuthor = "";
  var randomquote = "";
  var randomcolor = "";

  function getQuote() {
  	randomquote = Math.floor(Math.random() * quotes.length);
  	randomcolor = Math.floor(Math.random() * colors.length);
      currentQuote = quotes[randomquote];
      // currentAuthor = quotes[randomquote];
  	if (inIframe()) {
  		$('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=aLamm&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
  	}

  	$(document).ready(function () {
  	    $('html body').animate({
  	        backgroundColor: colors[randomcolor],
  	        color: colors[randomcolor]
  	    }, 500);
  	    $('#newquote, .social-icons .fa-twitter').animate({ backgroundColor: colors[randomcolor] }, 500);
  			$('blockquote footer').animate({ color: colors[randomcolor] }, 500);
  	    $('blockquote').animate({ borderLeftColor: colors[randomcolor] }, 500);
  	    $('#quotetext').animate({ opacity: 0 }, 500, function () {
  	        $(this).animate({ opacity: 1 }, 500);
  	        $(this).text(currentQuote);
  	    });
  	    $('#quotesource').animate({ opacity: 0 }, 500, function () {
  	        $(this).animate({ opacity: 1 }, 500);
  	        $(this).text(currentAuthor);
  	    });
      });
  }

  function openURL(url) {
      window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
  }

  getQuote();

  $(document).ready(function () {
      $('#newquote').on('click', getQuote);
      $('#tweetquote').on('click', function () {
          if (!inIframe()) {
              openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
          }
      });
  });
