const $ = require('jquery');

const Header = {
    
    toggleEnvelope () {
        if(window.scrollY <= 50) {
            $('.fas.fa-envelope').hide();
        } else {
            $('.fas.fa-envelope').show();
        }
    },

    shrinkHeader () {
        if(window.scrollY >= 50){
            $('.main-header-text').removeClass('notScrolling').addClass('scrolling');
        } else {
            $('.main-header-text').removeClass('scrolling').addClass('notScrolling');
        }
    } 
}


module.exports = Header;