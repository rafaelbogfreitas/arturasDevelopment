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

    //click event on envelope icon to toggle the form
    $('.fas.fa-envelope').on('click', function(){
        Form.toggleForm();
    });

    //click event on form close-btn to hide form
    $('.contact-form .close-btn').on('click', function(){
        Form.closeForm();
    })

    //submit event to hide the form after form submission
    $('.contact-form').on('submit', function(e){
        Form.submit(e);
    });
    
});


