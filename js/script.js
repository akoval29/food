window.addEventListener('DOMContentLoaded', function() {
    const tabs = require('./modules/tabs'),
        modal = require('./modules/modal'),
        timer = require('./modules/timer'),
        calc = require('./modules/calc'),
        forms = require('./modules/forms'),
        slider = require('./modules/slider'),
        cards = require('./modules/cards');

    tabs();
    modal();
    timer();
    calc();
    forms();
    slider();
    cards();

});        