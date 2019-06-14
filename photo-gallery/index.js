// var userInput;

// function: search()
// if input="red" {
//   return class="red"
// }
function searchFunction() {
    var input, filter, flowers, a, i;
    input = document.getElementsByClassName('search-bar').value;
    filter = input.value.toUpperCase();
    flowers = document.getElementByClassName('flowers');

    for (i = 0; i < x.length; i++) {
            if (!x[i].innerHTML.toUpperCase().includes(input)) {
                x[i].style.display="none";
            }
            else {
                x[i].style.display="list-item";
    // li = flowers.getElementsByClassName('li');

    // for(i=0 ; i< li.length; i++){
    //     a = flowers[i].getElementsByClassName('a')[0];
    //     if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
    //         li[i].style.display = "";
    //     }
    //
    //     else{
    //         li[i].style.display = 'none';
        }
    }
}
