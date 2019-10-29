const $ = require('jquery');
const loadUser = require('./Mustache');
const Header = require('./header');
const Layer = require('./layer');



$(document).ready(function(){
    loadUser();
    
    $(document).on('scroll', function(){
        Header.shrinkHeader();
        Header.toggleEnvelope();
    });

    $('#images-container').on('click', Layer.imageLayer);
    
});


