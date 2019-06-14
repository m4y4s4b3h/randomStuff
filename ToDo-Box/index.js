
var submit = $('.submit-btn');
var cardContainer = $('.card-container');


submit.on("click", orderFood);

function orderFood() {

  var drink = $('.drink').val();
  var entree = $('.entree').val();
  var side = $('.side').val();
  var sauce = $('.sauce').val();


  cardContainer.append(`
    <p class = "para"> <input type = "checkbox" class = "checkbox"></input> You ordered ${drink}, ${entree}, ${side}, and ${sauce}. Thank you! </p>
  `);
  
  var check = $(".checkbox");
  check.on("click",removeItem);
  // $('.name').val("");

}

function removeItem() {
  event.target.parentNode.remove();
}
