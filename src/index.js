import './scss/index.scss';
// require('bootstrap-sass/assets/stylesheets/_bootstrap.scss')

// require('jquery')
window.$ = require('jquery');
// import {jQuery} from 'jquery';
let pokers = [];
let flushs = ['S', 'C', 'D', 'H'];
let $pokerTable = $('.poker-content');
let $odd = $pokerTable.find('.odd');
let $even = $pokerTable.find('.even');



for (var i = 0; i < flushs.length; i++) {
    for (var j = 0; j < 13; j++) {
        pokers.push(flushs[i] + (j + 1));
    }
}

$odd.empty();
$even.empty();
$odd.each(function () {
    let $this = $(this);
    for(var i = 0; $this.children().length < 7; i++) {
        getPoker($this);
    }
});

$even.each(function () {
    let $this = $(this);
    for(var i = 0; $this.children().length < 6; i++) {
        getPoker($this);
    }
});



function getRandom(x) {
    return Math.floor(Math.random()*x);
}

function getPoker(target) {
    let index = getRandom(pokers.length);
    let showPoker = pokers[index];
    if($.inArray(showPoker, pokers) !== false) {
        target.append($('<div>').addClass('poker ' + showPoker));
        pokers.splice(index, 1);
    }
}