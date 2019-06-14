var button = $('.donate');
var title = $('h1');
var five = $('.five');
var twentyfive = $('.twentyfive');
var fifty = $('.fifty');
var onehundred = $('.onehundred');
var arry5 = ["Thank you for donating $5!", "We appreciate your contribution of five dollars!", "Congrats, you put $5 towards a good cause!"];
var arry25 = ["Thank you for donating $25!", "We appreciate your contribution of $25!", "Congrats, you put $25 towards a good cause!"];
var arry50 = ["Thank you for donating $50!", "We appreciate your contribution of $50!", "Congrats, you put $50 towards a good cause!"];
var arry100 = ["Thank you for donating $100!", "We appreciate your contribution of $100!", "Congrats, you put $100 towards a good cause!"];

five.on("click", thankYou);

$(document).ready(function(){
    $('.para').hide();
  });

function thankYou() {
    var para = $('.para');
    var random = Math.random()*3;
    var rounded = Math.floor(random);
    console.log(arry5[rounded]);
    para.text(arry5[rounded]);
    para.show();
    }

twentyfive.on("click", thankYou);

$(document).ready(function(){
        $('.para').hide();
        });

function thankYou() {
        var para = $('.para');
        var random = Math.random()*3;
        var rounded = Math.floor(random);
        console.log(arry25[rounded]);
        para.text(arry25[rounded]);
        para.show();
        }

fifty.on("click", thankYou);

$(document).ready(function(){
        $('.para').hide();
        });

function thankYou() {
        var para = $('.para');
        var random = Math.random()*3;
        var rounded = Math.floor(random);
        console.log(arry50[rounded]);
        para.text(arry50[rounded]);
        para.show();
        }


onehundred.on("click", thankYou);

$(document).ready(function(){
                $('.para').hide();
                });

function thankYou() {
                var para = $('.para');
                var random = Math.random()*3;
                var rounded = Math.floor(random);
                console.log(arry100[rounded]);
                para.text(arry100[rounded]);
                para.show();
                }
