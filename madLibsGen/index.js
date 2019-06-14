var submit = $(".submit-btn");

submit.on("click", madLib);

function madLib() {
  var blank = $('.blank');
  var place = $('.place').val();
  var pluralNoun1 = $('.pluralNoun1').val();
  var pluralNoun2 = $('.pluralNoun2').val();
  var pluralNoun3 = $('.pluralNoun3').val();
  var noun1 = $('.noun1').val();
  var noun2 = $('.noun2').val();
  var noun3 = $('.noun3').val();
  var noun4 = $('.noun4').val();
  var possessiveNoun = $('.possessiveNoun').val();
  var time = $('.time').val();
  var adjective1 = $('.adjective1').val();
  var adjective2 = $('.adjective2').val();
  var adjective3 = $('.adjective3').val();
  var adjective4 = $('.adjective4').val();
  var adjective5 = $('.adjective5').val();
  var ing = $('.ing').val();
  var verb1 = $('.verb1').val();
  var verb2 = $('.verb2').val();
  var verb3 = $('.verb3').val();
  var pastTense1 = $('.pastTense1').val();
  var pastTense2 = $('.pastTense2').val();

  alert('Your mad lib has been generated!');

  blank.append(`<p class = "para">On the ${adjective1} trip to ${place}, my ${adjective2} friend and I decided to invent a game. Since this would be a rather ${adjective3} trip, it would need to be a game with ${pluralNoun1} and ${pluralNoun2}. Using our ${noun1} to ${verb1}, we tried to get the ${noun2} next to us to play too, but they just ${pastTense1} at us and ${pastTense2} away. After a few rounds, we thought the game could use some ${pluralNoun3} so we turned on the ${noun3} and started ${ing} to the ${noun4} that came on. This lasted for ${time} before I got ${adjective4} and decided to ${verb2}. I'll never ${verb3} that trip, it was the most ${adjective5} road trip of my ${noun1}. </p>`)
}
