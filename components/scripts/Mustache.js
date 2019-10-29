const Mustache = require('mustache');
const $ = require('jquery');

const loadUser = function() {
    var template = $('#template').html();
    console.log(template);
    Mustache.parse(template); 
    $.getJSON('./data.json', function(data){
        var rendered = Mustache.render(template, data);
        $('#images-container').html(rendered);
    });
    
}

module.exports = loadUser;