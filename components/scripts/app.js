const $ = require('jquery');
const loadUser = require('./Mustache');
const Header = require('./header');
const Layer = require('./layer');
const Form = require('./form');


$(document).ready(function(){
    //load images markup using Mustache and the data.json
    loadUser();

    //hides the envelope icon when the page iniatially loads
    $('.fas.fa-envelope').hide();
    
    
    //scrolling event
    $(document).on('scroll', function(){
        //shrinks the header when page scrollY > 0
        Header.shrinkHeader();
        //shows or hides the envelope icon depending the scrollY
        Header.toggleEnvelope();
    });

    //click event listener in the images container
    $('#images-container').on('click', Layer.imageLayer);

    $('.fas.fa-envelope').on('click', function(){
        Form.toggleForm();
    })
    
});


